import table from "./iconKanjiTable.json"

export default function convertIconToKanji(iconStr) {
    return table[Object.keys(table).find(k => k === iconStr)];
}