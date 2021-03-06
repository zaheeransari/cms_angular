import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './admin/user-list/user-list.component';
import { SpeakersFormComponent } from './admin/speakers-list/speakers-form/speakers-form.component';
import { SpeakersListComponent } from './admin/speakers-list/speakers-list.component';
import { CountryListComponent } from './partial/country-list/country-list.component';
import { RegistrationListComponent } from './admin/registration-list/registration-list.component';
import { RegistrationFormComponent } from './admin/registration-list/registration-form/registration-form.component';
import { ProductFormComponent } from './admin/product-list/product-form/product-form.component';
import { ProductListComponent } from './admin/product-list/product-list.component';

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: "speakers", component: SpeakersListComponent },
  { path: "speakerform", component: SpeakersFormComponent },
  { path: "country", component: CountryListComponent },
  { path: "registration", component: RegistrationListComponent },
  { path: "registrationform", component: RegistrationFormComponent },
  { path: "product", component: ProductListComponent },
  { path: "productform", component: ProductFormComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
