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
};