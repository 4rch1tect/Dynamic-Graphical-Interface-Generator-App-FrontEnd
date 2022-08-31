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

  EditC(client: Client) {
    localStorage.setItem("id", client.id.toString());
    this.router.navigate(["clientEdit"]);
  }

  DeleteC(client: Client) {
    this.service.deleteClient(client)
      .subscribe(data => {
        this.clients = this.clients.filter(c => c !== client);
        alert("Client supprimé !");
      })
  }
  ListC(){
    this.router.navigate(["clientList"]);
  }
  AddC(){
    this.router.navigate(["clientAdd"]);
  }
}
