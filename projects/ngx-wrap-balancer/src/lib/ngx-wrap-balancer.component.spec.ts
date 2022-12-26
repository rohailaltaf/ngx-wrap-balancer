import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWrapBalancerComponent } from './ngx-wrap-balancer.component';

describe('NgxWrapBalancerComponent', () => {
  let component: NgxWrapBalancerComponent;
  let fixture: ComponentFixture<NgxWrapBalancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWrapBalancerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWrapBalancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
