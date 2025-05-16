import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Plans } from '../../app/app.interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import { PaymentStateService } from '../../services/payment-state.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: Plans[] = [];
  serverId: string | null = null;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    private paymentStateService: PaymentStateService
  ) {
  }

  ngOnInit() {
    this.firestoreService.getCollectionPlans('plans').subscribe(plans => {
      this.plans = plans;
    });
    this.route.queryParams.subscribe(params => {
      this.serverId = params['serverId'] || null;
    });
  }

  selectPlanById(planId: string) {
    this.firestoreService.getDocumentById<Plans>('plans', planId).subscribe(plan => {
      if (!plan) {
        console.error('Plan no encontrado');
        return;
      }
      this.paymentStateService.setPlan(plan); // guardar el plan en estado (opcional)

      this.router.navigate(['/payment'], {
        queryParams: {
          planId: plan.id,
          serverId: this.serverId
        }
      }).then(r => window.location.reload());
    });
  }

}
