import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ServiceService } from '../../Service/service.service';
import { Config } from 'src/app/Model/Config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {

  attCodes!: string
  configs!: Config[];
  configOptions!: Config[];

  constructor(private service: ServiceService, private router: Router, private sanitized: DomSanitizer) { }

  bindComponent(c): any {
    return this.sanitized.bypassSecurityTrustHtml(c);
  }

  ngOnInit(): void {
    this.service.getConfigs()
      .subscribe(data => {
        this.configs = data;})

  }
  //Redirection vers la page Modifier config By Id
  Editcon(config: Config) {
    localStorage.setItem("id", config.id.toString());
    this.router.navigate(["configEdit"]);
  }
  //Supprimer Config
  Deletecon(config: Config) {
    this.service.deleteConfig(config)
      .subscribe(data => {
        this.configs = this.configs.filter(c => c !== config);
        alert("Config supprimé !");
      })
  }
    //Redirection vers la page List Configs
  Listcon() {
    this.router.navigate(["configList"]);
  }
    //Redirection vers la page Add Configs
  Addcon() {
    this.router.navigate(["configAdd"]);
  }


}

