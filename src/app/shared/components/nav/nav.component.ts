import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navItems: Array<any> = [
    {
      title: 'Home',
      url: 'home'
    },
    {
      title: 'Personajes',
      url: 'characters'
    },
    {
      title: 'Casas',
      url: 'houses'
    },
    {
      title: 'Timeline',
      url: 'timeline'
    }
  ];
  constructor(private router: Router) {}

  ngOnInit() {}
}
