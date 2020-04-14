function triArea(base, height) {
    // Write a function that takes the base and height of a triangle and return its area.
    let areaOfTriangle = (base * height) / 2;
    return areaOfTriangle;
}

// Tests run--

// Test.assertEquals(triArea(3, 2), 3)
// Test.assertEquals(triArea(5, 4), 10)
// Test.assertEquals(triArea(10, 10), 50)
// Test.assertEquals(triArea(0, 60), 0)
// Test.assertEquals(triArea(12, 11), 66)

// Test results--

// Test Passed: Value == 3
// Test Passed: Value == 10
// Test Passed: Value == 50
// Test Passed: Value == 0
// Test Passed: Value == 66