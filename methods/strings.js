import moment from "moment";

export const getFormattedTime = time => {
    let date = new Date(time);
    let now = `${date.getHours()}:${date.getMinutes()}`;
    console.log('check',date.toLocaleTimeString('en-US'));
    return moment(date).format('LT');
}