import { Component, OnInit } from '@angular/core';

import {FirestoreService} from '../../services/firestore.service';
import {NgForOf, NgIf} from '@angular/common';
import {Server} from '../firestore/server';
import {ServerItemComponent} from '../components/server-item/server-item.component';
import {FilterComponent} from '../components/filter/filter.component';

@Component({
  selector: 'app-server-shop',
  templateUrl: './server-shop.component.html',
  imports: [
    NgForOf,
    ServerItemComponent,
    FilterComponent,
    NgIf
  ],
  styleUrls: ['./server-shop.component.css']
})
export class ServerShopComponent implements OnInit {
  servers: Server[] = [];
  filteredServers: Server[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    // Obtener datos en tiempo real
    this.firestoreService.getCollection('/servers').subscribe((data) => {
      this.servers = data;
      this.filteredServers = data;
    });
  }

  getEvent(event: {
    selectedMinCPUS: number;
    selectedMaxCPUS: number;
    selectedMinStorage: number;
    selectedMaxStorage: number;
    selectedMinMemory: number;
    selectedMaxMemory: number;
    selectedMinPrice: number;
    selectedMaxPrice: number;
    name: string
  }) {
    this.filteredServers = this.servers.filter((server) => {
      return (
        ((server.CPU >= event.selectedMinCPUS) && (server.CPU <= event.selectedMaxCPUS)) &&
        ((server.Disk >= event.selectedMinStorage) && (server.Disk <= event.selectedMaxStorage)) &&
        ((server.RAM) >= (event.selectedMinMemory) && (server.RAM <= event.selectedMaxMemory)) &&
        ((server.Price) >= (event.selectedMinPrice) && (server.Price <= event.selectedMaxPrice)) &&
        (server.Name.toLowerCase().includes(event.name))
      );
    })
  }
}
