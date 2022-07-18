
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
const Fungsi = {
    romanize,
    rupiah,
};
export default Fungsi;