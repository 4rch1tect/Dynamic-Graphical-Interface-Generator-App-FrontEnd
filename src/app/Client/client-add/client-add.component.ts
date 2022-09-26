import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  modelClient = new Client();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  //Enregistrer les donnees du client dans la base de donnees
  EnregistrerC(modelClient: Client) {
    this.service.ajoutClient(modelClient)
      .subscribe(data => {
        alert("client ajouté !");
        this.router.navigate(["clientList"]);
      })
  }

}
