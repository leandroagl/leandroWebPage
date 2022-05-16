import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() src : string = '';
  @Input() backgroundUrl: string = '';
  @Input() cardTitle: string ='';
  @Input() cardText: string = '';
  @Input() url: string = '';
  @Input() imgName: string = '';
  @Input() lenguaje: string = '';

  @Input() viewLenguaje: boolean = false;

  assetsRoute: string = '../../../.';
  folderApps: string = './assets/img/apps/';
  folderLogos: string = './assets/img/logos/';

  constructor( ) {
  }

  ngOnInit(): void {
  }



}
