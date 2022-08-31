import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Config } from 'src/app/Model/Config';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-config-add',
  templateUrl: './config-add.component.html',
  styleUrls: ['./config-add.component.css']
})
export class ConfigAddComponent implements OnInit {

  modelConfig = new Config();
  form: any;
  status: string;


  constructor(private router: Router, private service: ServiceService, private fb: FormBuilder) {
    this.form = this.fb.group({
      option: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.status = "hidden"
  }

  Enregistrercon(modelConfig: Config) {
    console.log(modelConfig.options);
    console.log(modelConfig);
    this.service.ajoutConfig(modelConfig)
      .subscribe(data => {
        alert("Config ajouté !");
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