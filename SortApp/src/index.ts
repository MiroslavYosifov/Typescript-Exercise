import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([101, 3, -5, 0, 4]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('XSFEWdswfaFaAS');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
