// Create a function that takes a string and returns the word count.The string will be a sentence.

function countWords(str) {
    //Create a function that takes a string and returns the word count. The string will be a sentence.
    stringBrokenUpIntoArray = str.split(" ")
    return stringBrokenUpIntoArray.length
}

// Tests run --

// Test.assertEquals(countWords("It's high noon"), 3)
// Test.assertEquals(countWords("Is this easy mode"), 4)
// Test.assertEquals(countWords("What an easy task, right"), 5)
// Test.assertEquals(countWords("This is a test"), 4)
// Test.assertEquals(countWords("Just an example here move along"), 6)
// Test.assertEquals(countWords("How are you today?"), 4)


// Test results --

// Test Passed: Value == 3
// Test Passed: Value == 4
// Test Passed: Value == 5
// Test Passed: Value == 4
// Test Passed: Value == 6
// Test Passed: Value == 4