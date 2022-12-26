import { NgModule } from '@angular/core';
import { NgxWrapBalancerComponent } from './ngx-wrap-balancer.component';
import { ResizeObserverDirective } from './resize-observer.directive';



@NgModule({
  declarations: [
    NgxWrapBalancerComponent,
    ResizeObserverDirective
  ],
  imports: [
  ],
  exports: [
    NgxWrapBalancerComponent
  ]
})
export class NgxWrapBalancerModule { }
