import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yassAngular';

  constructor(private router: Router) { }
  //Redirection vers la page List Produit
  List(){
    this.router.navigate(["list"]);
  }
  //Redirection vers la page Add Produit
  Add(){
    this.router.navigate(["add"]);
  }
  //Redirection vers la page List Client
  ListC(){
    this.router.navigate(["clientList"]);
  }
  //Redirection vers la page Add Client
  AddC(){
    this.router.navigate(["clientAdd"]);
  }

}
