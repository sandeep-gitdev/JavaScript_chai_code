  const myObject = {
    js: 'javascipt',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
  }

  for (const key in myObject) {
     // console.log(`${key} shortcut is for ${myObject[key]}`)
  }

  const programming = ['js', 'rb', 'py']

  for (const key in programming) {
   //console.log(programming[key])
  }

//   const map = new Map()
//    map.set('IN', "India");
//    map.set('USA', "United State of America")
//    map.set('Fr', "France")
//    map.set('IN', "India");

//    for (const key in map) {
//       console.log(key);
//    }