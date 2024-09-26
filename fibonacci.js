// fibo [2] = fibo[2-1] + fibo[2-2];
// fibo [3] = fibo[3-1] + fibo[3-2];
// fibo [4] = fibo[4-1] + fibo[4-2];
// fibo [n] = fibo[n-1] + fibo[n-2];
// fibo [i] = fibo[i-1] + fibo[i-2];


// fibonacci by using for loof

// function fibonacci(n) {
//     var fibo = [0, 1];
//     for(var i = 2; i <= n; i++){
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         // console.log(fibo[i], fibo[i - 1], fibo[i - 1]);
//     }  
//     return fibonacci;
// }
// var ressult = fibonacci(10);
// console.log(ressult);

// fibonaacci by using while;
// ?????




//fibonacci by using recursive way. 
// function fibonacci(n){
//     if(n == 0){
//         return 0;
//     }
//     if(n == 1){ // this is a stoping condition.
//         return 1;
//     }
//     else{
//         return fibonacci(n - 1) + fibonacci(n - 2);
//     }
// }
// var ressult = fibonacci(10);
// console.log(ressult);


//fibonacci recursive full serise
 function fibonacci(n){
    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return 1;
    }
    else{
        var fibo = fibonacci(n-1);
        var nextElemnet = fibo[n - 1] + fibo[n -2];
        fibo.push(nextElemnet);
        return fibo;
    }
 }
 var ressult = fibonacci(10);
 console.log(ressult);