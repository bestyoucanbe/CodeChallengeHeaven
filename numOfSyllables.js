function numberSyllables(word) {
    // Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
    // Solution--Create an array with each piece using split and then get its length.
    return word.split("-").length
}

// Tests run--

// Test.assertEquals(numberSyllables("buf-fet"), 2)
// Test.assertEquals(numberSyllables("beau-ti-ful"), 3)
// Test.assertEquals(numberSyllables("mon-u-men-tal"), 4)
// Test.assertEquals(numberSyllables("on-o-mat-o-poe-ia"), 6)
// Test.assertEquals(numberSyllables("o-ver-ly"), 3)
// Test.assertEquals(numberSyllables("pas-try"), 2)
// Test.assertEquals(numberSyllables("flu-id"), 2)
// Test.assertEquals(numberSyllables("syl-la-ble"), 3)

// Test results--

// Test Passed: Value == 2
// Test Passed: Value == 3
// Test Passed: Value == 4
// Test Passed: Value == 6
// Test Passed: Value == 3
// Test Passed: Value == 2
// Test Passed: Value == 2
// Test Passed: Value == 3