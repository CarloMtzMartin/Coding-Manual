// Using Dynamic Programming.
function fib(num, memo = [0, 1 ]) {
    
    if(memo[num] !== undefined) return memo[num];
    //if(num <= 2) return 1;
    memo[num] =  fib(num - 1, memo) + fib(num - 2, memo);
    console.log(num, memo);
    return memo[num];
}

console.log(fib(10))