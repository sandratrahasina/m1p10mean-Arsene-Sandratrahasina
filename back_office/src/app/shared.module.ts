import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule
  ],
  exports: [
    NzBreadCrumbModule,
    NzMenuModule,
    NzLayoutModule,
    NzIconModule
  ]
})
export class SharedModule { }
