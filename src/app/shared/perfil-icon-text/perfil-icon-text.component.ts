import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-icon-text',
  templateUrl: './perfil-icon-text.component.html',
  styleUrls: ['./perfil-icon-text.component.css']
})
export class PerfilIconTextComponent implements OnInit {

  @Input() iconClass1: string = "";
  @Input() iconClass2: string = "";
  @Input() iconClass3: string = "";

  @Input() iconText1: string = "";
  @Input() iconText2: string = "";
  @Input() iconText3: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
