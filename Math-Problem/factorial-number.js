// Find the factorial of a number

function factorial (num){
    if(num < 0){
      return  console.log('negative number not find out factorial')
    }

    let result = 1;
    for(let i = 1; i <= num; i++){
       result = result * i;
    }

    return result
}
console.log(factorial(5))