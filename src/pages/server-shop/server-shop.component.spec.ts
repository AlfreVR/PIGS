import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerShopComponent } from './server-shop.component';

describe('ServerShopComponent', () => {
  let component: ServerShopComponent;
  let fixture: ComponentFixture<ServerShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
