import getData from "./getData";
import transformData, { convertToCelcius } from "./transformData";
import maringa from "../maringa.json"
import convertIconToKanji from "./convertIconToKanji";

const domObj = {
    saikou: document.getElementById("saikou"),
    saitei: document.getElementById("saitei"),
    kanji: document.querySelector("#kanji > span")
}

// export default async function displayData() {
//     try {
//         let data = await getData();
//         console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
// }

export default function displayData() {
    const data = transformData(maringa);
    
    domObj.saikou.textContent = data.days[0].feelslikemax;
    domObj.saitei.textContent = data.days[0].feelslikemin;
    // domObj.kanji.textContent = convertIconToKanji(data.days[0].icon)
    domObj.kanji.textContent = "時々曇り"

    const el = domObj.kanji;
    const len = el.textContent.trim().length;

    if (len === 1) el.style.fontSize = '8em';
    else if (len === 2) el.style.fontSize = "6em";
    else el.style.fontSize = '3em';
};