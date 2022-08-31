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


  EditC(){
    let id=localStorage.getItem("id");
    this.service.getClientId(+id!)
    .subscribe(data=>{
      this.client=data;
    })
  }
  ActualiserC(client:Client){
    this.service.updateClient(client)
    .subscribe(data=>{
      this.client=data;
      alert("Client modifié !");
      this.router.navigate(["clientList"]);
    })
  }

}
