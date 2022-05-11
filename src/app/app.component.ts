import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'leandroWebPage';


  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {

    this.router.events.subscribe((event: NavigationEvent) => {

      switch (true) {
        case event instanceof NavigationStart: {
          this.spinner.show();
          disableScroll.on();
          break;
        }

        case event instanceof NavigationEnd: {
          setTimeout(() => {
            this.spinner.hide()
            disableScroll.off();
          }, 2500)
        }

      }
    })

  }


}
