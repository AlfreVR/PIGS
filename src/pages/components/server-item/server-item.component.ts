import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Server} from '../../firestore/server';


@Component({
  selector: 'app-server-item',
  templateUrl: './server-item.component.html',
  styleUrls: ['./server-item.component.css']
})
export class ServerItemComponent {
  @Input() server!: Server;
  @Output() delete = new EventEmitter<string>();

  eliminarServidor() {
    this.delete.emit(this.server.id); // Emitir el ID del servidor al padre
  }
}
