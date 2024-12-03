import Foundation

var f = 1 << -10

let example = """
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
"""

example.split(separator: "\n")

func findFirstNumberInLine(_ input: String) -> String {
    // number regex
    let regex = try! NSRegularExpression(pattern: "[0-9]", options: [])
    let range = NSRange(location: 0, length: input.utf16.count)
    let match = regex.firstMatch(in: input, options: [], range: range)
    if let match = match {
        let number = input[Range(match.range, in: input)!]
        return String(number)
    }
    return "fail"
}

func findLastNumberInLine(_ input: String) -> String {
    return findFirstNumberInLine(String(input.reversed()))
}

func verify() -> String {
    guard findFirstNumberInLine("a1b2c") == "1" else { return "findFirstNumberInLine failed" }
    guard findFirstNumberInLine("treb7uchet") == "7" else { return "findFirstNumberInLine failed" }
    
    guard findLastNumberInLine("a1b2c") == "2" else { return "findLastNumberInLine failed" }
    guard findLastNumberInLine("treb7uchet") == "7" else { return "findLastNumberInLine failed" }
    
    return "PASSED"
}

func findSumOfcalibrationValues(_ input: String) -> Int {
    // new line character regex
    var sum = 0
    input.split(separator: "\n").forEach { line in
        let val = findFirstNumberInLine(String(line)) + findLastNumberInLine(String(line))
        sum += Int(val)!
    }
    return sum
}

findSumOfcalibrationValues(example)
// findSumOfcalibrationValues(puzzleInput)

