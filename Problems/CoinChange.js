function coinChange(coins, amount) {
    var arr = [];
    //arr.length = amount + 1;
    arr[0] = 1;
    for(var i = 1; i <= amount; i++) arr[i] = 0;

    coins.forEach(coin => {
        console.log("Coin:", coin);
        for(var j = 0; j < arr.length; j++) {
            //console.log(j)
            if(coin <= j) {
                //console.log("arr[j - coin]: " +  arr[j - coin])

                arr[j] = arr[j - coin] + arr[j]
                //console.log("arr[j]: " +  arr[j])
            }
        }
        console.log(arr);
    });
    
    console.log(arr)
    return arr[amount];
}

console.log(coinChange([2, 4], 10));

