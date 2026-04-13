import getData from "./getData";
import transformData, { convertToCelcius } from "./transformData";
import maringa from "../maringa.json"

const domObj = {
    saikou: document.getElementById("saikou"),
    saitei: document.getElementById("saitei")
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

    domObj.saikou.textContent = convertToCelcius(data.currentConditions.feelslikemax);
    domObj.saitei.textContent = convertToCelcius(data.currentConditions.feelslikemin);
};