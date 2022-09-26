import { Component, Input, OnInit } from '@angular/core';
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
 options :any
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
  //Enregistrer les donnees du client dans la base de donnees
  //Selon le type du attType, un input sera cree de meme type que attType dans la liste des configs
  Enregistrercon(modelConfig: Config) {
    if (this.modelConfig.attType == "checkbox") {
      modelConfig.attCode = '<input type="checkbox">';
    }
    else if (this.modelConfig.attType == "radio") {
      modelConfig.attCode = `<input type="radio" name="${modelConfig.attName}">`;
    }
    else if (this.modelConfig.attType == "select") {
      for(let i = 0; i<modelConfig.options.length;i++){
        this.options += `<option>${modelConfig.options[i]}</option>`;
      }
      modelConfig.attCode = `<select name="${modelConfig.attName}">${this.options}</select>`;
    }
    else {
      modelConfig.attCode = `<input type="${modelConfig.attType}">`;
    }

    this.service.ajoutConfig(modelConfig)
      .subscribe(data => {
        alert("Config ajouté !");
        this.router.navigate(["configList"]);
      })
  }
  //Types des inputs disponibles dans attType
  types = [{
    id: 1, attType: 'text',
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
    id: 5, attType: 'select'
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
  {
    id: 10, attType: 'number'
  },
  ];
  //Saisir les options en cas de checkbox, radio ou select
  addOption() {
    this.modelConfig.options = []
    const option = this.form.controls.option as FormArray;
    option.push(this.fb.group({
      option: []
    }));
  }
  trackByFn(index, item) {
    return index;
  }
  //Supprimer une option lors de la saisie des options
  removeAddress(uId: number) {
    const index = this.form.controls.option?.value.findIndex((address) => address.id === uId);
    this.form.controls.option?.value.splice(index, 1);
  }
}

