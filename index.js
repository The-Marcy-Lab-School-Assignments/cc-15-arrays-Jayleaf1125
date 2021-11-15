//write your code here
const findLongestWord = words => {
    let longestWord = "";
    for(let word of words) {
        if(word.length > longestWord.length) {
             longestWord = word;
        } else {
            continue
        }
    }
     return longestWord;
}

console.log(findLongestWord(["jazzy", "jumpy", "quaky"])) //returns "jazzy"
