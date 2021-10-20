import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  @Input() cardNumber: string = '';
  @Input('month') set Month(value) { // Encaptilation 
    // console.log('month:', value)
    if ((value < 1 || value > 12) && value !== null) {
      throw Error('month must in 1 to 12. Invalid month value is ' + value);
    } else {
      this.month = value;
    }

  }
  @Input() year: number = 1;
  @Input() cvc: number = 1;
  @Input() isFlip: boolean = false;

  month: string;
  constructor() { }

  ngOnInit(): void {
  }

}
