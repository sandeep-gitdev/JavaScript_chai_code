  const coding = ["js", "ruby", "java", "python"]

//   coding.forEach( function (item) {
//       console.log(item);
//   })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//    console.log(item, index, arr);
// })

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.langName);
} ) 