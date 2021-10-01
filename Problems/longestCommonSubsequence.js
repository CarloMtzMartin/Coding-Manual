// https://www.youtube.com/watch?v=ASoaQq66foQ

function lcs(text1, text2) {
    console.log("LCS of ", text1, text2);
    if(text1.length === 0 || text2.length === 0) return 0;
    // Compare last character in both strings.
    if(text1.slice(-1) === text2.slice(-1)) {
        // If same, then result is 1 plus the same function without the last value.
        return 1 + lcs(text1.slice(0, -1), text2.slice(0, -1));
    } else {
        return Math.max(lcs(text1, text2.slice(0, -1)), lcs(text1.slice(0, -1), text2));
    }

}

console.log(lcs("abaaz", "abz"));