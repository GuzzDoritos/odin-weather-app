import maringa from '/src/maringa.json'
import { domObj } from '../helpers/domObj.js';
import convertIconToKanji from '../helpers/convertIconToKanji.js';


export default function todayConditions(data) {
    setKanjiIcon(data)
    setTemperatures(data)
    setRainProbability(data)
}

function setKanjiIcon(data) {
    const kText = domObj.todayConditions.kanjiText
    kText.textContent = convertIconToKanji(data.currentConditions.icon)

    if (kText.textContent.length > 4) {
        kText.style.fontSize = '3em';
    }
}

function setTemperatures(data) {
    const saikou = domObj.todayConditions.kyouNoSaikou
    const saitei = domObj.todayConditions.kyouNoSaitei

    saikou.textContent = data.days[0].feelslikemax
    saitei.textContent = data.days[0].feelslikemin
}

function setRainProbability(data) {
    const averages = getAverages(data.days[1].hours)
    const tC = domObj.todayConditions;

    tC.jikan1.textContent = averages[0];
    tC.jikan2.textContent = averages[1];
    tC.jikan3.textContent = averages[2];
    tC.jikan4.textContent = averages[3];
}

function getAverages(hours) {
    let currentValues = []
    let averages = []
    for (let i = 0; i < hours.length; i++) {
        currentValues.push(hours[i].precipprob)
        if (currentValues.length === 6) {
            averages.push((currentValues.reduce((sum, current) => sum + current, 0) / 6).toFixed(1))
            currentValues = []
        }
    }

    return averages
}