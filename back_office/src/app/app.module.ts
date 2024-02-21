import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { SharedModule } from './shared.module';
import { AppRouteModule } from './app-route.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AppRouteModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
