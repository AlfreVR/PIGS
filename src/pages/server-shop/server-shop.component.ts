import { Component, OnInit } from '@angular/core';

import {FirestoreService} from '../../services/firestore.service';
import {NgForOf} from '@angular/common';
import {Server} from '../firestore/server';
import {ServerItemComponent} from '../components/server-item/server-item.component';

@Component({
  selector: 'app-server-shop',
  templateUrl: './server-shop.component.html',
  imports: [
    NgForOf,
    ServerItemComponent
  ],
  styleUrls: ['./server-shop.component.css']
})
export class ServerShopComponent implements OnInit {
  servers: Server[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    // Obtener datos en tiempo real
    this.firestoreService.getCollection('/servers').subscribe((data) => {
      this.servers = data;
    });
  }

}
