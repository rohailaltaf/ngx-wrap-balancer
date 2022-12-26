import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWrapBalancerModule } from 'ngx-wrap-balancer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxWrapBalancerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
