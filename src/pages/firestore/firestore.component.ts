import { Component, OnInit } from '@angular/core';
import {Server} from './server';
import {FirestoreService} from '../../services/firestore.service';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {
  servers: Server[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    // Obtener datos en tiempo real
    this.firestoreService.getCollection<Server>('servers').subscribe((data: Server[]) => {
      this.servers = data;
    });
  }
}
