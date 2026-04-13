import maringa from "../maringa.json";

export default function transformData(dataJson) {
    const data = {
        address: dataJson.address,
        description: dataJson.description,
        currentConditions: {
            dateTime: dataJson.currentConditions.dateTime,
            feelslike: dataJson.currentConditions.feelslike,
            cloudcover: dataJson.currentConditions.cloudcover,
            feelslikemax: dataJson.days[0].feelslikemax,
            feelslikemin: dataJson.days[0].feelslikemin,
            humidity: dataJson.currentConditions.humidity,
            moonphase: dataJson.currentConditions.moonphase,
            precip: dataJson.currentConditions.precip,
            sunrise: dataJson.currentConditions.sunrise,
            sunset: dataJson.currentConditions.sunset
        }
    };
    console.log(data);
    return data;
};
