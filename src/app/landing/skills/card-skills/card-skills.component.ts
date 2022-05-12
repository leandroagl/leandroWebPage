import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})

export class CardSkillsComponent implements OnInit {

  // Rutas a los assets
  angular: string = "./assets/angular.png";
  azure: string = "./assets/azure.png";
  bootstrap: string = "./assets/bootstrap.png";
  css: string = "./assets/css.png";
  exchange: string = "./assets/exchange.png";
  firebase: string = "./assets/firebase.png";
  git2: string = "./assets/git2.png";
  gsuite: string = "./assets/gsuite.png";
  html: string = "./assets/html.png";
  hyperv: string = "./assets/hyperv.png";
  javascript: string = "./assets/javascript.png";
  linux: string = "./assets/linux.png";
  material: string = "./assets/material.png";
  mikrotik: string = "./assets/mikrotik.png";
  mongo: string = "./assets/mongo.png";
  node: string = "./assets/node.png";
  office365: string = "./assets/office365.png";
  pfsense: string = "./assets/pfsense.png";
  postman: string = "./assets/postman.png";
  prtg: string = "./assets/prtg.png";
  qnap: string = "./assets/qnap.png";
  sharepoint: string = "./assets/sharepoint.png";
  typescript: string = "./assets/typescript.png";
  ubiquiti: string = "./assets/ubiquiti.png";
  veeam: string = "./assets/veeam.png";
  vmware: string = "./assets/vmware.png";
  winserver: string = "./assets/winserver.png";

  constructor() { }

  ngOnInit(): void {
  }

}
