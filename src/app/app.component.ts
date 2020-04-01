import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'Dont look at the clock, do what it does keep moving', author:'Biron Lovine'},
    {id:2, name:'Difficulties in your life do not come to destroy you but to help you realize your potential and future', author:'Delzel Ochieng'},
    {id:3, name:'There is nothing good that comes easy', author:'Lucy Wigwa'},
    {id:3, name:'Excuses are the nails that buikd the house of failer', author:'Lovine Otieno'},
  ];
}
