import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:string[];

  constructor(){
    this.quotes = ['Dont look at the clock, do what it does keep moving', 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'There is nothing good that comes easy']
  }
}
