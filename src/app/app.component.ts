import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  arr = [1, 1, 2, 3, 5, 8, 13];

  obj = [
    {
      title: 'First title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, harum.'
    },
    {
      title: 'Second title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, officiis?'
    }
  ];

  constructor() {}
}
