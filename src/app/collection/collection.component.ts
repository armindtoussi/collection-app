import { Component, OnInit }  from '@angular/core';
import { Collectable }        from '../shared/collectable.model';

import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html'
})
export class CollectionComponent implements OnInit {
  
  collectedItems: Collectable[] = [];

  constructor(private _collectableService: CollectableService) { }

  ngOnInit() {
    this.collectedItems = this._collectableService.getCollection();
  }

  onRemoveFromCollection(item: Collectable): void { 
    this._collectableService.removeFromCollection(item);
  }
}
