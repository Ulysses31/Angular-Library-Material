import { CoreComponent } from './core.components';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: 'test', loadChildren: () => import('../features/test/test.module').then(m => m.TestModule) },
      { path: '**', redirectTo: 'test' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
