import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Config } from 'src/app/Model/Config';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-edit',
  templateUrl: './config-edit.component.html',
  styleUrls: ['./config-edit.component.css']
})
export class ConfigEditComponent implements OnInit {

  modelConfig = new Config();
  form: any;
  status: string;
  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.form = this.fb.group({
      option: this.fb.array([]),
    });
   }

  ngOnInit(): void {
    this.Editcon();
    this.status = "hidden"
  }

  Editcon() {
    let id = localStorage.getItem("id");
    this.service.getConfigId(+id!)
      .subscribe(data => {
        this.modelConfig = data;
      })
  }
  Actualisercon(config: Config) {
    this.service.updateConfig(config)
      .subscribe(data => {
        this.modelConfig = data;
        alert("Config modifié !");
        this.router.navigate(["configList"]);
      })
  }
  
  types = [{
    id: 1, attType: 'text'
  },
  {
    id: 2, attType: 'password'
  },
  {
    id: 3, attType: 'radio'
  },
  {
    id: 4, attType: 'checkbox'
  },
  {
    id: 5, attType: 'number'
  },
  {
    id: 6, attType: 'email'
  },
  {
    id: 7, attType: 'date'
  },
  {
    id: 8, attType: 'color'
  },
  {
    id: 9, attType: 'file'
  },
  ];

  selected() {
    console.log(this.modelConfig.attType);
  }
  addOption() {
    this.modelConfig.options = []
    const option = this.form.controls.option as FormArray;
    option.push(this.fb.group({
      option: []
    }));
    console.log(option);
  }
  trackByFn(index, item) {
    return index;
  }
  removeAddress(uId: number) {
    const index = this.form.controls.option?.value.findIndex((address) => address.id === uId);
    this.form.controls.option?.value.splice(index, 1);
  }
}