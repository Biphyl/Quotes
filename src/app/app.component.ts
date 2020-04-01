import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1, 'Dont look at the clock, do what it does keep moving', 'Biron Lovine'),
    new Quote(2, 'Difficulties in your life do not come to destroy you but to help you realize your potential and future', 'LucycWigwa'),
    new Quote(3, 'There is nothing good that comes easy', 'Denzel Ochieng'),
    new Quote(3, 'Excuses are the nails that buikd the house of failer', 'Lovine Otieno')
     ];
}
