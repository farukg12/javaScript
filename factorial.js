// 3! = 1*2*3
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10

// function factorial(num){
//     var factorial = 1;
//     for (var i = 1; i <= num; i++){
//         factorial = factorial * i;
    
//     }
//     return factorial;
// }

// var total = factorial(10);
// console.log(total);


// fatorial by sing while

// function factorial (num){
//         var i = 1;
//     var factorial = 1;
//     while( i <= num){
//         factorial = factorial * i;
//         // console.log(i, factorial);
//         i++;
//     }
//     return factorial;
// }
// var total = factorial(10);
// console.log(total);



// factorial Recursive Way
// 3! = 1*2*3
// 5! = 1*2*3*4*5
// 6! = 5!*6
// 7! = (7-1)!*6
// n! = (n-1)!*n

function factorial (n){
    if (n == 0){
        return 1;
    } else{
        return n * factorial(n - 1);
    }
}
var result = factorial(10);
console.log(result);