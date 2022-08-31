import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Produit } from 'src/app/Model/Produit';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  produit :Produit=new Produit();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Edit();
  }
  Edit(){
    let id=localStorage.getItem("id");
    this.service.getProduitId(+id!)
    .subscribe(data=>{
      this.produit=data;
    })
  }
  Actualiser(produit:Produit){
    this.service.updateProduit(produit)
    .subscribe(data=>{
      this.produit=data;
      alert("Prdouit modifié !");
      this.router.navigate(["list"]);
    })
  }

}
