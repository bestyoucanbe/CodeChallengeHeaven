function missingAngle(angle1, angle2) {
    // Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
    // All angles add up to 180 for a triangle
    let thirdAngle = 180 - (angle1 + angle2)
    if (thirdAngle < 90)
        return "acute"
    else if (thirdAngle > 90)
        return "obtuse"
    else
        return "right"
}

// Tests run--

// Test.assertEquals(missingAngle(27, 59), "obtuse")
// Test.assertEquals(missingAngle(135, 11), "acute")
// Test.assertEquals(missingAngle(45, 45), "right")
// Test.assertEquals(missingAngle(45, 15), "obtuse")
// Test.assertEquals(missingAngle(31, 100), "acute")
// Test.assertEquals(missingAngle(35, 55), "right")

// Test results--

// Test Passed: Value == 'obtuse'
// Test Passed: Value == 'acute'
// Test Passed: Value == 'right'
// Test Passed: Value == 'obtuse'
// Test Passed: Value == 'acute'
// Test Passed: Value == 'right