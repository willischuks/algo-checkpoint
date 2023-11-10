function countSentence(sentence) {
    // Initialize the counters.
    let numChars = 0;
    let numWords = 0;
    let numVowels = 0;

    // Iterate over the characters in the sentence.
    for (let i = 0; i < sentence.length; i++) {
      // Count the number of characters.
    numChars++;

      // If the character is a space, count the number of words.
    if (sentence[i] === " ") {
        numWords++;
    }

      // If the character is a vowel, count the number of vowels.
    if (sentence[i] === "a" || sentence[i] === "e" || sentence[i] === "i" || sentence[i] === "o" || sentence[i] === "u") {
        numVowels++;
    }
    }

    // Return the counters.
    return {
    numChars,
    numWords,
    numVowels,
    };
}

  // Example usage:

    const sentence = "This is a sentence.";

  // Count the number of characters, words, and vowels in the sentence.
    const counts = countSentence(sentence);

  // Print the results.
    console.log(`Number of characters: ${counts.numChars}`);
    console.log(`Number of words: ${counts.numWords}`);
    console.log(`Number of vowels: ${counts.numVowels}`);
