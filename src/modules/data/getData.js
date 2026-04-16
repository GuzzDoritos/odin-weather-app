
const API_KEY = "VG7NK2QKYJBVFE2446HRF2WPD";

export default async function getData(cityStr) {
    const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityStr}/2026-04-16/2026-04-26
    ?unitGroup=metric
    &elements=
    add:resolvedAddress,
    add:windspeedmax,
    remove:cloudcover,
    remove:dew,
    remove:humidity,
    remove:moonphase,
    remove:pressure,
    remove:solarenergy,
    remove:solarradiation,
    remove:source,
    remove:stations,
    remove:uvindex,
    remove:visibility,
    remove:windgust,
    remove:windspeed
    &include=days,hours,current,alerts
    &key=${API_KEY}
    &contentType=json
    &lang=ja`.replaceAll(' ', '');
    try {
        const response = await fetch(query);
        const dataJson = await response.json();
        return dataJson;
    } catch (error) {
        console.error(error);
    };
};