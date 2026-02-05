import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  name = 'hi 4erpbi7';

  status = false;
  search = 'hello';
  add() {
    console.log('hello');
  }
}
