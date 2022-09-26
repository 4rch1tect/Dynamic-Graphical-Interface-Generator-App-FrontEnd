import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../../Service/service.service';
import { Client } from 'src/app/Model/Client';

@Component({
  selector: 'app-clientList',
  templateUrl: './clientList.component.html',
  styleUrls: ['./clientList.component.css']
})
export class ClientListComponent implements OnInit {

  clients!: Client[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getClients()
      .subscribe(data => {
        this.clients = data;
      })
  }
  //Redirection vers la page Modifier client By Id
  EditC(client: Client) {
    localStorage.setItem("id", client.id.toString());
    this.router.navigate(["clientEdit"]);
  }
  //Supprimer Client
  DeleteC(client: Client) {
    this.service.deleteClient(client)
      .subscribe(data => {
        this.clients = this.clients.filter(c => c !== client);
        alert("Client supprimé !");
      })
  }
  //Redirection vers la page List Clients
  ListC(){
    this.router.navigate(["clientList"]);
  }
  //Redirection vers la page Add Clients
  AddC(){
    this.router.navigate(["clientAdd"]);
  }
}
