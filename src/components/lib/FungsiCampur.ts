import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);

const tglNow = moment().format("DD"); //07
const tglNowInt = moment().format("Do"); //7
const monthNow = moment().format("Mo");
const yearNow = moment().format("YYYY");

const romanize = (num) => {
    if (isNaN(num)) return NaN;
    let digits = String(+num).split(""),
        key = [
            "",
            "C",
            "CC",
            "CCC",
            "CD",
            "D",
            "DC",
            "DCC",
            "DCCC",
            "CM",
            "",
            "X",
            "XX",
            "XXX",
            "XL",
            "L",
            "LX",
            "LXX",
            "LXXX",
            "XC",
            "",
            "I",
            "II",
            "III",
            "IV",
            "V",
            "VI",
            "VII",
            "VIII",
            "IX",
        ],
        roman = "",
        i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

const rupiah = (num: number): string => {
    return "Rp. " + num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}


const getMonthNames = (frmt = "MMMM") => {
    let months = []; // Months array
    let m = moment(yearNow); // Create a moment in 2022
    let tempData = {
        index: 0,
        name: '',
        number: 0, //1=januari
        string: 0, //01=januari
    }
    for (
        let i = 0;
        i < monthNow;
        i++ // Loop from 0 to 12 (exclusive)
    )
        months.push(m.months(i).format(frmt)); // Append the formatted month
    //   moment.lang(userLang); // Restore user language
    return months; // Return the array of months
}

const getMonthNamesObj = (frmt = "MMMM") => {
    let months = []; // Months array
    let m = moment(yearNow); // Create a moment in 2022
    let tempData = {
        index: 0,
        name: '',
        number: 0, //1=januari
        string: 0, //01=januari
    }
    for (
        let i = 0;
        i < monthNow;
        i++ // Loop from 0 to 12 (exclusive)
    ) {


        tempData = {
            index: i,
            name: m.months(i).format(frmt),
            number: m.months(i).format("M"),
            string: m.months(i).format("MM"),
        }
        months.push(tempData); // Append the formatted month

    }
    //sort asc
    months.sort((a, b) => {
        return b.index - a.index;
    });


    //   moment.lang(userLang); // Restore user language
    return months; // Return the array of months
}

const getLastYear = (frmt = "YYYY") => {
    let years = []; // Years array
    let y = yearNow;
    for (let i = 0; i < 6; i++) {
        years.push(y.toString());
        y--;
    }
    //   moment.lang(userLang); // Restore user language
    return years; // Return the array of years
}
const Fungsi = {
    romanize,
    rupiah,
    getMonthNames,
    getMonthNamesObj,
    getLastYear
};
export default Fungsi;