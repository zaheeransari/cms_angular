import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './admin/user-list/user-list.component';
import { SpeakersFormComponent } from './admin/speakers-list/speakers-form/speakers-form.component';
import { SpeakersListComponent } from './admin/speakers-list/speakers-list.component';

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "speakers", component: SpeakersListComponent },
  { path: "speakerform", component: SpeakersFormComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }