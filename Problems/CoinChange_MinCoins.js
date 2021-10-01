var coinChange = function(coins, amount) {
    coins.sort((a,b) => a - b);
    var results = [];
    results.length = amount + 1;
    results.fill(amount + 1)
    console.log(results.join("\t"));
    results[0] = 0;
    //[1,2,5], amount = 11
    
    for(var coin of coins) {
        for(var i = 1; i < results.length; i++) {
            //0   0  1  2  3  4  5  6  7  8  9  10  11   arr[i] / coin + arr[arr[i] % coin]
            //1   0  1  2  3  4  5  6
            //2   0  1  1  2  2  3  3
            //5   0  1  1  2  2  1  2 
            //results[i] = Math.min(results[i], Math.floor(i / coin)  + results[i % coin]);
            if (coin <= i) {
            results[i] = Math.min(results[i], results[i - coin] + 1);
        }
            
        }
        console.log(coin, results.join("\t"));
        console.log("TEMP Result", results[results.length - 1])
    }
    
    var result = results[results.length - 1];
    return result > amount ? -1 : result;
    
};

console.log(coinChange([2, 4], 10));

