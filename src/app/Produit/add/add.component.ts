import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Model/Produit';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  modelProduit = new Produit();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Enregistrer(modelProduit: Produit) {
    this.service.ajoutProduit(modelProduit)
      .subscribe(data => {
        alert("produit ajouté !");
        this.router.navigate(["list"]);
      })
  }

}
