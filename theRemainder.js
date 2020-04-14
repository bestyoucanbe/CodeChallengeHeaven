function remainder(x, y) {
    //There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
    let theRemainder = x % y;
    return theRemainder
}

// Tests run--

// Test.assertEquals(remainder(7, 2), 1)
// Test.assertEquals(remainder(3, 4), 3)
// Test.assertEquals(remainder(-9, 45), -9)
// Test.assertEquals(remainder(5, 5), 0)

// Test results--

// Test Passed: Value == 1
// Test Passed: Value == 3
// Test Passed: Value == -9
// Test Passed: Value == 0