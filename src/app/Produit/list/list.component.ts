import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../../Service/service.service';
import { Produit } from 'src/app/Model/Produit';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produits!: Produit[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProduits()
      .subscribe(data => {
        this.produits = data;
      })
  }

  Edit(produit: Produit) {
    localStorage.setItem("id", produit.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(produit: Produit) {
    this.service.deleteProduit(produit)
      .subscribe(data => {
        this.produits = this.produits.filter(p => p !== produit);
        alert("Produit supprimé !");
      })
  }

  List(){
    this.router.navigate(["list"]);
  }
  Add(){
    this.router.navigate(["add"]);
  }

}
