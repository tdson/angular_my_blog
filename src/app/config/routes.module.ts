import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { EntryComponent } from '../entry/entry.component';

const routes: Routes = [
  {path: '', redirectTo: '/entries', pathMatch: 'full'},
  {path: 'entries', component: AppComponent},
  {path: 'entries/:id', component: EntryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
