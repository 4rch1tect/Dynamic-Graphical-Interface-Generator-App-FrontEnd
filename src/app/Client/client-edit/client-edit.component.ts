import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Client } from 'src/app/Model/Client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client :Client=new Client();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.EditC();
  }

  //Recuperer les donnees du client dans le formulaire de modification By Id
  EditC(){
    let id=localStorage.getItem("id");
    this.service.getClientId(+id!)
    .subscribe(data=>{
      this.client=data;
    })
  }
  //Enregistrer les modifications des donnees du client
  ActualiserC(client:Client){
    this.service.updateClient(client)
    .subscribe(data=>{
      this.client=data;
      alert("Client modifié !");
      this.router.navigate(["clientList"]);
    })
  }

}
