import getData from "./getData";
import transformData from "./transformData";
import maringa from "../maringa.json"

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
};