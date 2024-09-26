// let year = 3996;
// let total = year % 4;
// // console.log(total == 0);

// if (total == 0){
//     console.log("this is a leap year")
// }
// else{
//     console.log("this is not a leap year")

// }

function leapYear(year){
    const total = year % 4;
    if (total == 0){
    console.log("this is a leap year")        
    }
    else{
    console.log("this is not a leap year")
    }
    return leapYear;
}
var Faruk = leapYear(2024);
console.log(Faruk);
