import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }


  ngOnInit(): void {

    this.spinner.show(
    );

    setTimeout(() => {
      this.spinner.hide();
    }, 3000)


  }

}
