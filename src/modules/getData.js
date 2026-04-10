
const API_KEY = "VG7NK2QKYJBVFE2446HRF2WPD";
const apiKeyString = `?key=${API_KEY}`;
const baseUrl = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

export default async function getData(cityStr) {
    try {
        const response = await fetch(`${baseUrl}${cityStr}${apiKeyString}`);
        const dataJson = await response.json();
        return dataJson;
    } catch (error) {
        console.error(error);
    };
};