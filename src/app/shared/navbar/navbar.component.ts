import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  toAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: "smooth" });
  }

  toSkills() {
    document.getElementById('skills')?.scrollIntoView({ behavior: "smooth" });
  }

  toTrabajos() {
    document.getElementById('trabajos')?.scrollIntoView({ behavior: "smooth" });
  }

  toContacto() {
    document.getElementById('contacto')?.scrollIntoView({ behavior: "smooth" });
  }
}
