import maringa from '../../maringa.json'
import { domObj } from './helpers/domObj.js'
import getData from '../data/getData.js';
import convertIconToKanji from './helpers/convertIconToKanji.js';
import todayConditions from './components/todayConditions.js';


// export default async function displayData() {
export default function displayData() {
    try {
        // let data = await getData('tokyo');
        // console.log(data)
        const c = maringa
        console.log(c)

        todayConditions(c);
        
    } catch (err) {
        console.log(err)
    }
}

// export default function displayData() {
//     const c = maringa

//     console.log(c)

//     domObj.todayConditions.kanjiText.textContent = c.currentConditions.conditions
//     domObj.todayConditions.kyouNoSaikou.textContent = c.days[0].feelslikemax
//     domObj.todayConditions.kyouNoSaitei.textContent = c.days[0].feelslikemin
// };