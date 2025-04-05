import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  minCPUS: number = 2;
  maxCPUS: number = 4;

  minStorage: number = 256;
  maxStorage: number = 512;

  minMemory: number = 8;
  maxMemory: number = 32;

  minPrice: number = 2;
  maxPrice: number = 16;

  name: string = '';
}
