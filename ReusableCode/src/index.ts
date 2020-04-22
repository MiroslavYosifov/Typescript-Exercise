import { MatchReader } from './MatchReader';
import { CsvFileReader} from './CsvFileReader';
import { MatchResult } from './MatchResult';

// const reader = new MatchReader('original.csv');
// reader.read();

const csvFileReader = new CsvFileReader('original.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
matchReader.matches

let manUnitedWins = 0;

for (const match of matchReader.matches) {
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(manUnitedWins);
