import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Produit/add/add.component';
import { ListComponent } from './Produit/list/list.component';
import { EditComponent } from './Produit/edit/edit.component';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ClientListComponent } from './Client/clientList/clientList.component';
import { ClientAddComponent } from './Client/client-add/client-add.component';
import { ClientEditComponent } from './Client/client-edit/client-edit.component';
import { ConfigListComponent } from './Config/config-list/config-list.component';
import { ConfigAddComponent } from './Config/config-add/config-add.component';
import { ConfigEditComponent } from './Config/config-edit/config-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    ClientListComponent,
    ClientAddComponent,
    ClientEditComponent,
    ConfigListComponent,
    ConfigAddComponent,
    ConfigEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
