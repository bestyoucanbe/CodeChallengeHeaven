// Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

// (side1 + side2) - 1 = maximum range of third edge--[Hint given]

const nextEdge = (side1, side2) => (side1 + side2) - 1

// Tests run--

// Test.assertEquals(nextEdge(5, 4), 8)
// Test.assertEquals(nextEdge(8, 3), 10)
// Test.assertEquals(nextEdge(7, 9), 15)
// Test.assertEquals(nextEdge(10, 4), 13)
// Test.assertEquals(nextEdge(7, 2), 8)

// Tests passed--

// Test Passed: Value == 8
// Test Passed: Value == 10
// Test Passed: Value == 15
// Test Passed: Value == 13
// Test Passed: Value == 8