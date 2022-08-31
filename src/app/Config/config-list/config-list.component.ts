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
  test =  ['<input>', '<button>hello</button>' , '<select><option>H1</option><option>H2</option></select>'];

 
  configs!: Config[];
  constructor(private service: ServiceService, private router: Router, private sanitized: DomSanitizer) { }

  bindComponent(c): any {
   return  this.sanitized.bypassSecurityTrustHtml(c);
  }

  ngOnInit(): void {
    this.service.getConfigs()
      .subscribe(data => {
        this.configs = data;
      })
      
  }

  Editcon(config: Config) {
    localStorage.setItem("id", config.id.toString());
    this.router.navigate(["configEdit"]);
  }

  Deletecon(config: Config) {
    this.service.deleteConfig(config)
      .subscribe(data => {
        this.configs = this.configs.filter(c => c !== config);
        alert("Config supprimé !");
      })
  }
  Listcon() {
    this.router.navigate(["configList"]);
  }
  Addcon() {
    this.router.navigate(["configAdd"]);
  }


}

