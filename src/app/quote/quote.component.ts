import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1, 'Dont look at the clock, do what it does keep moving', 'Biron Lovine', new Date(2020,4,21)),
    new Quote(2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'LucycWigwa', new Date(2019,5,16)),
    new Quote(3, 'There is nothing good that comes easy', 'Denzel Ochieng', new Date(2015,8,3),
     ];

     toggleDetails(index){
       this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
     }

     viewedQuote(isViewed, index){
       if (isViewed) {
         this.quotes.splice(index,1);
       }
     }

  constructor() { }

  ngOnInit() {
  }

}
