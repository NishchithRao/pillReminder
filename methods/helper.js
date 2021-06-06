import moment from "moment"

export const formCalender = () => {
    let endDate = parseInt(moment().endOf('month').format('D'));
    let currentMonth = parseInt(moment().month());
    let dates=[];
    let datesArr = [...Array(parseInt(endDate)).keys()];
    datesArr.map(date => {
        dates.push({
            'day': moment(currentMonth,'M').day(date-1).format('dd'),
            'displayDate':date+1,
            'actualDate': moment(currentMonth,'M').day(date-1).format()
        });
    });
    return dates;
}