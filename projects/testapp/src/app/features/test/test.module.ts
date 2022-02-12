import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    SharedModule,
    TestRoutingModule
  ]
})
export class TestModule { }
