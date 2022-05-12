import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  templateUrl: './card-skills.component.html',
  styleUrls: ['./card-skills.component.css']
})

export class CardSkillsComponent implements OnInit {

  routeToAssets: string = "../../../."

  // Rutas a los assets
  angular: string = this.routeToAssets + "./assets/img/logos/angular.png";
  azure: string = this.routeToAssets + "./assets/img/logos/azure.png";
  bootstrap: string = this.routeToAssets + "./assets/img/logos/bootstrap.png";
  css: string = this.routeToAssets + "./assets/img/logos/css.png";
  exchange: string = this.routeToAssets + "./assets/img/logos/exchange.png";
  firebase: string = this.routeToAssets + "./assets/img/logos/firebase.png";
  git2: string = this.routeToAssets + "./assets/img/logos/git2.png";
  gsuite: string = this.routeToAssets + "./assets/img/logos/gsuite.png";
  html: string = this.routeToAssets + "./assets/img/logos/html.png";
  hyperv: string = this.routeToAssets + "./assets/img/logos/hyperv.png";
  javascript: string = this.routeToAssets + "./assets/img/logos/javascript.png";
  linux: string = this.routeToAssets + "./assets/img/logos/linux.png";
  material: string = this.routeToAssets + "./assets/img/logos/material.png";
  mikrotik: string = this.routeToAssets + "./assets/img/logos/mikrotik.png";
  mongo: string = this.routeToAssets + "./assets/img/logos/mongo.png";
  node: string = this.routeToAssets + "./assets/img/logos/node.png";
  office365: string = this.routeToAssets + "./assets/img/logos/office365.png";
  pfsense: string = this.routeToAssets + "./assets/img/logos/pfsense.png";
  postman: string = this.routeToAssets + "./assets/img/logos/postman.png";
  prtg: string = this.routeToAssets + "./assets/img/logos/prtg.png";
  qnap: string = this.routeToAssets + "./assets/img/logos/qnap.png";
  sharepoint: string = this.routeToAssets + "./assets/img/logos/sharepoint.png";
  typescript: string = this.routeToAssets + "./assets/img/logos/typescript.png";
  ubiquiti: string = this.routeToAssets + "./assets/img/logos/ubiquiti.png";
  veeam: string = this.routeToAssets + "./assets/img/logos/veeam.png";
  vmware: string = this.routeToAssets + "./assets/img/logos/vmware.png";
  winserver: string = this.routeToAssets + "./assets/img/logos/winserver.png";

  constructor() { }

  ngOnInit(): void {
  }

}
