import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './Produit/add/add.component';
import { EditComponent } from './Produit/edit/edit.component';
import { ListComponent } from './Produit/list/list.component';
import { ClientListComponent } from './Client/clientList/clientList.component';
import { ClientEditComponent } from './Client/client-edit/client-edit.component';
import { ClientAddComponent } from './Client/client-add/client-add.component';
import { ConfigListComponent } from './Config/config-list/config-list.component';
import { ConfigEditComponent } from './Config/config-edit/config-edit.component';
import { ConfigAddComponent } from './Config/config-add/config-add.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'edit', component:EditComponent},
  {path:'add', component:AddComponent},
  {path:'clientList', component:ClientListComponent},
  {path:'clientEdit', component:ClientEditComponent},
  {path:'clientAdd', component:ClientAddComponent},
  {path:'configList', component:ConfigListComponent},
  {path:'configEdit', component:ConfigEditComponent},
  {path:'configAdd', component:ConfigAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
