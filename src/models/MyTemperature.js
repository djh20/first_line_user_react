export default class MyTemperature{
    constructor(year,month,date,temp){
        this.date = new Date(year,month,date)
        this.temp = parseFloat(temp)
    }
}
