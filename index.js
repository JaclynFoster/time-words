// Write a function that turns a string of 24-hour time into words.

// You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23,
//  and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

// Handle noon and midnight specially:

// timeWord("00:00")
// // 'midnight'

// timeWord("12:00")
// // 'noon'
// Otherwise, covert times to text:

// timeWord("01:00")
// // "one o'clock am"

// timeWord("06:01")
// // 'six oh one am'

// timeWord("06:10")
// // 'six ten am'

// timeWord("06:18")
// // 'six eighteen am'

// timeWord("06:30")
// // 'six thirty am'

// timeWord("10:34")
// // 'ten thirty four am'
// Don’t forget to handle early morning properly:

// timeWord("00:12")
// // 'twelve twelve am'
// For times after noon, add ‘pm’:

// timeWord("12:09")
// // 'twelve oh nine pm'

// timeWord("23:23")
// // 'eleven twenty three pm'

//  const numbers = {
//     00: "oh",
//     0: "twelve", 
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight", 
//     9: "nine",
//     10: "ten",
//     11: "eleven",
//     12:"twelve",
//     13: "thirteen",
//     14: "fourteen",
//     15: "fifteen",
//     16: "sixteen",
//     17: "seventeen",
//     18: "eighteen",
//     19: "nineteen",
//     20: "twenty",
//     30: "thirty",
//     40: "forty",
//     50: "fifty"
//  }


// const timeWords = (str) => {
//     let splitStr = str.split(":")
//     let hour = splitStr[0]
//     let minute = splitStr[1]
//    let myAnswerStr = ""
//    myAnswerStr = numbers[hour]  
//    console.log(myAnswerStr)
//   let splitMin = minute.split("")
//   console.log(splitMin)
//   if (splitMin[0] === "0") {
//     splitMin[0] = numbers[1]
//   }

// }

// console.log(timeWords("12:09"))

 
const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"]
const ones = [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
const tens = [" ", " ","ten", "twenty", "thirty", "forty", "fifty"]
const timeWords = (str) => {
    let [hour, minute] = str.split(":")
    hour = parseInt(hour)
    minute = parseInt(minute)
    console.log(hour, minute)
    let answerStr = hours[hour % 12] + " "
    if (hour === 0 && minute === 0) {
        answerStr += "midnight"
    } 
    if (hour === 12 && minute === 0) {
        answerStr += "noon"
    }
 
   
    if (minute >= 20) {
        answerStr += tent[Math.floor(minute / 10)] + ones[minute % 10]
    }
   else if (minute >= 10) {
        answerStr += ones[minute]
     
    }
    else if (minute > 0) {
        answerStr += `oh ${ones[minute]}`
    } else {
        answerStr += "o' clock"
    }

    if (hour >= 12) {
        answerStr += " pm" 
    } else {
        answerStr += " am"
    }
    return answerStr
}

console.log(timeWords("12:09"))