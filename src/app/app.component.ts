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
  List(){
    this.router.navigate(["list"]);
  }
  Add(){
    this.router.navigate(["add"]);
  }
  ListC(){
    this.router.navigate(["clientList"]);
  }
  AddC(){
    this.router.navigate(["clientAdd"]);
  }

}
