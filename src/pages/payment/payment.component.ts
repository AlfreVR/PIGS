import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {Plans, Server} from '../../app/app.interfaces';
import {FirestoreService} from '../../services/firestore.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PaymentStateService} from '../../services/payment-state.service';

@Component({
  selector: 'app-payment',
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  plans: Plans[] =[];
  server?: Server;
  plan?: Plans;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    private paymentState: PaymentStateService
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    const serverId = params['serverId'];
    const planId = params['planId'];

    this.server = this.paymentState.getServer();
    this.plan = this.paymentState.getPlan();

    if (!this.server && serverId) {
      this.firestoreService.getDocumentById<Server>('servers', serverId).subscribe(server => {
        this.server = server;
      });
    }
    if (!this.plan && planId) {
      this.firestoreService.getDocumentById<Plans>('plans', planId).subscribe(plan => {
        this.plan = plan;
      })
    }

  }

  paymentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),

    cardNumber1: new FormControl('', [Validators.required, Validators.pattern('\\d{4}')]),
    cardNumber2: new FormControl('', [Validators.required, Validators.pattern('\\d{4}')]),
    cardNumber3: new FormControl('', [Validators.required, Validators.pattern('\\d{4}')]),
    cardNumber4: new FormControl('', [Validators.required, Validators.pattern('\\d{4}')]),

    expirationMonth: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    expirationYear: new FormControl('', [Validators.required, Validators.min(25), Validators.max(32)]),

    cvv: new FormControl('', [Validators.required, Validators.pattern('\\d{3,4}')]),

    tcCheck: new FormControl(false, Validators.requiredTrue),
    saveCardNumber: new FormControl(true),
  });

  planFeaturesIncluded: Array<string> = ["Feature 1", "Feature 2", "Feature 3"];

  submitForm() {
    console.log("Payment Submitted with this data:");
    console.log("Name:", this.paymentForm.value.name);
    console.log("Address:", this.paymentForm.value.address);
    console.log(
      "Card Number:",
      this.paymentForm.value.cardNumber1,
      this.paymentForm.value.cardNumber2,
      this.paymentForm.value.cardNumber3,
      this.paymentForm.value.cardNumber4
    );
    console.log("Expiration month:", this.paymentForm.value.expirationMonth);
    console.log("Expiration year", this.paymentForm.value.expirationYear);
    console.log("CVV:", this.paymentForm.value.cvv);
    console.log("T&C:", this.paymentForm.value.tcCheck);
    console.log("Save Card: ", this.paymentForm.value.saveCardNumber);
  }

  get name() {
    return this.paymentForm.get('name');
  }

  get address() {
    return this.paymentForm.get('address');
  }

  get cardNumber1() {
    return this.paymentForm.get('cardNumber1');
  }

  get cardNumber2() {
    return this.paymentForm.get('cardNumber2');
  }

  get cardNumber3() {
    return this.paymentForm.get('cardNumber3');
  }

  get cardNumber4() {
    return this.paymentForm.get('cardNumber4');
  }

  get expirationMonth() {
    return this.paymentForm.get('expirationMonth');
  }

  get expirationYear() {
    return this.paymentForm.get('expirationYear');
  }

  get cvv() {
    return this.paymentForm.get('cvv');
  }

  get tcCheck() {
    return this.paymentForm.get('tcCheck');
  }

  get saveCardNumber() {
    return this.paymentForm.get('saveCardNumber');
  }

  getCardNumberInvalid() {
    const cardNumber1Invalid = ((this.cardNumber1?.dirty || this.cardNumber1?.touched)
      && this.cardNumber1?.invalid);
    const cardNumber2Invalid = ((this.cardNumber2?.dirty || this.cardNumber2?.touched)
      && this.cardNumber2?.invalid);
    const cardNumber3Invalid = ((this.cardNumber3?.dirty || this.cardNumber3?.touched)
      && this.cardNumber3?.invalid);
    const cardNumber4Invalid = ((this.cardNumber4?.dirty || this.cardNumber4?.touched)
      && this.cardNumber4?.invalid);

    return cardNumber1Invalid || cardNumber2Invalid || cardNumber3Invalid || cardNumber4Invalid;
  }

  checkCardNumberError(type: string) {
    const cardNumber1Error = this.cardNumber1?.errors?.[type];
    const cardNumber2Error = this.cardNumber2?.errors?.[type];
    const cardNumber3Error = this.cardNumber3?.errors?.[type];
    const cardNumber4Error = this.cardNumber4?.errors?.[type];

    return cardNumber1Error || cardNumber2Error || cardNumber3Error || cardNumber4Error;
  }

  getExpirationDateInvalid() {
    const expirationMonthInvalid = ((this.expirationMonth?.dirty || this.expirationMonth?.touched)
      && this.expirationMonth?.invalid);
    const expirationYearInvalid = ((this.expirationYear?.dirty || this.expirationYear?.touched)
      && this.expirationYear?.invalid);

    return expirationMonthInvalid || expirationYearInvalid;
  }

  goToServers() {
    this.router.navigate(['/servers'], {
      queryParams: {
        planId: this.plan?.id || null,
        serverId: this.server?.id || null,
      }
    });
  }

  goToPlans() {
    this.router.navigate(['/plans'], {
      queryParams: {
        planId: this.plan?.id || null,
        serverId: this.server?.id || null,
      }
    });
  }

  clear() {
    this.paymentState.clear();
    this.router.navigate(['/payment'], {
      queryParams: {
        planId: null,
        serverId: null
      }
    }).then(r => window.location.reload());
  }
}
