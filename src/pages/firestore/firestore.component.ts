import { Component, OnInit } from '@angular/core';
import {Server} from './server';
import {FirestoreService} from '../../services/firestore.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {
  servers: Server[] = [];

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    // Obtener datos en tiempo real
    this.firestoreService.getCollection('/servers').subscribe((data) => {
      this.servers = data;
    });
  }

}
