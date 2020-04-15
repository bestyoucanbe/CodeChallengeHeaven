function getFirstValue(arr) {
    //Create a function that takes an array and returns the first element.
    let firstArrayElement = arr[0]
    return firstArrayElement
}

// Tests run--

// Test.assertEquals(getFirstValue([1, 2, 3]), 1)
// Test.assertEquals(getFirstValue([80, 5, 100]), 80)
// Test.assertEquals(getFirstValue([-500, 0, 50]), -500)
// Test.assertEquals(getFirstValue([5, 2, 3]), 5)
// Test.assertEquals(getFirstValue([75675, 5, 100]), 75675)
// Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320)

// Test results--

// Test Passed: Value == 1
// Test Passed: Value == 80
// Test Passed: Value == -500
// Test Passed: Value == 5
// Test Passed: Value == 75675
// Test Passed: Value == -52320