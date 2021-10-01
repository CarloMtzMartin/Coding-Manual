encrypt("abcd");


function encrypt(text) {
    console.log("Input:", text);
    if(text.length == 1) return text[0];
    if(text.length == 2) return text[0] + encrypt(text[1]);
    else {
        var index = Math.floor((text.length - 1) / 2);
        return text[index] + encrypt(text.slice(0, index)) + encrypt(text.slice(index + 1));
    }
}
