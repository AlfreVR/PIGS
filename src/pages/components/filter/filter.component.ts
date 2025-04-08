import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [
    FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  private _selectedMinCPUS: number = 2;
  private _selectedMaxCPUS: number = 4;
  private _minCPUS: number = 2;
  private _maxCPUS: number = 8;

  private _selectedMinStorage: number = 256;
  private _selectedMaxStorage: number = 512;
  private _minStorage: number = 128;
  private _maxStorage: number = 1024;

  private _selectedMinMemory: number = 8;
  private _selectedMaxMemory: number = 32;
  private _minMemory: number = 4;
  private _maxMemory: number = 64;

  private _selectedMinPrice: number = 2;
  private _selectedMaxPrice: number = 16;
  private _minPrice: number = 1;
  private _maxPrice: number = 50;

  private _name: string = '';


  get selectedMinCPUS(): number {
    return this._selectedMinCPUS;
  }

  get selectedMaxCPUS(): number {
    return this._selectedMaxCPUS;
  }

  get minCPUS(): number {
    return this._minCPUS;
  }

  get maxCPUS(): number {
    return this._maxCPUS;
  }

  get selectedMinStorage(): number {
    return this._selectedMinStorage;
  }

  get selectedMaxStorage(): number {
    return this._selectedMaxStorage;
  }

  get minStorage(): number {
    return this._minStorage;
  }

  get maxStorage(): number {
    return this._maxStorage;
  }

  get selectedMinMemory(): number {
    return this._selectedMinMemory;
  }

  get selectedMaxMemory(): number {
    return this._selectedMaxMemory;
  }

  get minMemory(): number {
    return this._minMemory;
  }

  get maxMemory(): number {
    return this._maxMemory;
  }

  get selectedMinPrice(): number {
    return this._selectedMinPrice;
  }

  get selectedMaxPrice(): number {
    return this._selectedMaxPrice;
  }

  get minPrice(): number {
    return this._minPrice;
  }

  get maxPrice(): number {
    return this._maxPrice;
  }

  get name(): string {
    return this._name;
  }


  set selectedMinCPUS(value: number) {
    if (value > this._selectedMaxCPUS) {
      this._selectedMinCPUS = this._selectedMaxCPUS;
    }
    else if (value < this._minCPUS) {
      this._selectedMinCPUS = this._minCPUS;
    }
    else {
      this._selectedMinCPUS = value;
    }
  }

  set selectedMaxCPUS(value: number) {
    if (value < this._selectedMinCPUS) {
      this._selectedMaxCPUS = this._selectedMinCPUS;
    }
    else if (value > this._maxCPUS) {
      this._selectedMaxCPUS = this._maxCPUS;
    }
    else {
      this._selectedMaxCPUS = value;
    }
  }

  set selectedMinStorage(value: number) {
    if (value > this._selectedMaxStorage) {
      this._selectedMinStorage = this._selectedMaxStorage;
    }
    else if (value < this._minStorage) {
      this._selectedMinStorage = this._minStorage;
    }
    else {
      this._selectedMinStorage = value;
    }
  }

  set selectedMaxStorage(value: number) {
    if (value < this._selectedMinStorage) {
      this._selectedMaxStorage = this._selectedMinStorage;
    }
    else if (value > this._maxStorage) {
      this._selectedMaxStorage = this._maxStorage;
    }
    else {
      this._selectedMaxStorage = value;
    }
  }

  set selectedMinMemory(value: number) {
    if (value > this._selectedMaxMemory) {
      this._selectedMinMemory = this._selectedMaxMemory;
    }
    else if (value < this._minMemory) {
      this._selectedMinMemory = this._minMemory;
    }
    else {
      this._selectedMinMemory = value;
    }
  }

  set selectedMaxMemory(value: number) {
    if (value < this._selectedMinMemory) {
      this._selectedMaxMemory = this._selectedMinMemory;
    }
    else if (value > this._maxMemory) {
      this._selectedMaxMemory = this._maxMemory;
    }
    else {
      this._selectedMaxMemory = value;
    }
  }

  set selectedMinPrice(value: number) {
    if (value > this._selectedMaxPrice) {
      this._selectedMinPrice = this._selectedMaxPrice;
    }
    else if (value < this._minPrice) {
      this._selectedMinPrice = this._minPrice;
    }
    else {
      this._selectedMinPrice = value;
    }
  }

  set selectedMaxPrice(value: number) {
    if (value < this._selectedMinPrice) {
      this._selectedMaxPrice = this._selectedMinPrice;
    }
    else if (value > this._maxPrice) {
      this._selectedMaxPrice = this._maxPrice;
    }
    else {
      this._selectedMaxPrice = value;
    }
  }

  set name(value: string) {
    this._name = value;
  }

  onInputChange(event: Event, value: number) {
    if (event.target instanceof HTMLInputElement) {
      event.target.value = value.toString();
    }
  }
}
