function naiveStringSearch(text, pattern) {
    var count = 0;
    for(var i = 0; i < text.length; i++) {
        if(text[i] !== pattern[0]) continue;
        console.log("I: " + i);
        var x = true;
        for(var j = 0; j < pattern.length; j++) {
            if(pattern[j] !== text[i + j]) {
                x = false;
                break;
            }
            
        }
        if(x) count++;
    }

    return count;
}

console.log("COUNT: " + naiveStringSearch("wowomgzomg","omg"));