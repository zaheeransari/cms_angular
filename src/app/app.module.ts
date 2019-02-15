import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { UserListComponent } from './admin/user-list/user-list.component';
import { RestService } from './services/rest.service';
import { ShowJsonComponent } from './admin/show-json/show-json.component';
import { FilterdataPipe } from './pipe/filterdata.pipe';
import { MasterMenuComponent } from './master-menu/master-menu.component';
import { SpeakersListComponent } from './admin/speakers-list/speakers-list.component';
import { SpeakersFormComponent } from './admin/speakers-list/speakers-form/speakers-form.component';
import { CountryListComponent } from './admin/country-list/country-list.component';
import { PartialSpeakerFormComponent } from './partial/partial-speaker-form/partial-speaker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowJsonComponent,
    FilterdataPipe,
    UserListComponent,
    MasterMenuComponent,
    SpeakersListComponent,
    SpeakersFormComponent,
    CountryListComponent,
    PartialSpeakerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,ReactiveFormsModule,
  ],
  entryComponents: [
    ShowJsonComponent,
    PartialSpeakerFormComponent
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
