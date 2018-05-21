import { Collectable } from "./collectable.model";


export class CollectableService {
    private collectables: Collectable[] = [
        { description: 'A very rare book',        type: 'Book' },
        { description: 'A gold coloured Sharpie', type: 'Marker'},
        { description: 'Table that Newton used',  type: 'table'},
        { description: 'Jimi Hendrix shirt',      type: 'shirt'}
    ];

    constructor() { }

    getCollectables(): Collectable[] {
        return this.collectables;
    }
}