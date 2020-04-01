import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isViewed = new EventEmitter<boolean>();

  quoteViewed(viewed:boolean){
    this.isViewed.emit(viewed);
  }
  constructor() { }

  ngOnInit() {
  }

}
