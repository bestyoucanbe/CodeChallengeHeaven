function redundant(str) {
    // Write a function redundant that takes in a string str and returns a function that returns str.
    function returnValueFunction() {
        return str
    }
    return returnValueFunction
}

//Tests run--

// const f1 = redundant("apple")
// const f2 = redundant("pear")
// const f3 = redundant("")

// Test.assertEquals(f1(), "apple")
// Test.assertEquals(f2(), "pear")
// Test.assertEquals(f3(), "")

//Test results--

// Test Passed: Value == 'apple'
// Test Passed: Value == 'pear'
// Test Passed: Value == ''