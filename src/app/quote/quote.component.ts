import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Dont look at the clock, do what it does keep moving'},
    {id:2, name:'Difficulties in your life do not come to destroy you but to help you realize your potential and future'},
    {id:3, name:'There is nothing good that comes easy'},
    {id:3, name:'Excuses are the nails that buikd the house of failer'}
     ];


  constructor() { }

  ngOnInit() {
  }

}
