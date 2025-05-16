import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Server } from '../../firestore/server';
import { Router, ActivatedRoute } from '@angular/router';
import { PaymentStateService } from '../../../services/payment-state.service';

@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent implements OnInit {
  @Input() server!: Server;
  @Output() delete = new EventEmitter<string>();
  planId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paymentStateService: PaymentStateService
  ) {}

  ngOnInit() {
    // 🔄 Leer el planId desde la URL actual
    this.route.queryParams.subscribe(params => {
      this.planId = params['planId'] || null;
    });
  }

  eliminarServidor() {
    this.delete.emit(this.server.id);
  }

  goToPayment() {
    this.paymentStateService.setServer(this.server);


    this.router.navigate(['/payment'], {
      queryParams: {
        serverId: this.server.id,
        planId: this.planId
      }
    });
  }
}
