import { Collectable } from "./collectable.model";


export class CollectableService {
    private collectables: Collectable[] = [
        { description: 'A very rare book',        type: 'Book' },
        { description: 'A gold coloured Sharpie', type: 'Marker'},
        { description: 'Table that Newton used',  type: 'table'},
        { description: 'Jimi Hendrix shirt',      type: 'shirt'}
    ];

    private collection: Collectable[] = [];

    constructor() { }

    getCollectables(): Collectable[] {
        return this.collectables;
    }

    getCollection(): Collectable[] {
        return this.collection;
    }

    addToCollection(item: Collectable): void {
        if(this.collection.indexOf(item) !== -1) {
            return;
        }
        this.collection.push(item);
    }

    removeFromCollection(item: Collectable): void {
        this.collection.splice(this.collection.indexOf(item), 1);
    }
}