import { Component, OnInit }  from '@angular/core';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {

  collectables = [];

  constructor(private _collectableService: CollectableService) { }

  ngOnInit(): void {
    this.collectables = this._collectableService.getCollectables();
  }


  onAddToCollection() {
    
  }
}
