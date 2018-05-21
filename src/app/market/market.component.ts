import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {

  collectables = [
    { description: 'A very rare book', type: 'Book' },
    { description: 'A gold coloured Sharpie', type: 'Marker'},
    { description: 'Table that Newton used', type: 'table'},
    { description: 'Jimi Hendrix shirt', type: 'shirt'}
  ];

  constructor() { }

  ngOnInit(): void {
  }


  onAddToCollection() {
    alert('hello');
  }
}
