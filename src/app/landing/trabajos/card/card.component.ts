import { Component, Input, OnInit, } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';

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
  assetsRoute: string = '../../../.';


  constructor( ) {
  }

  ngOnInit(): void {
  }



}
