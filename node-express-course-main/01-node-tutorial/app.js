console.log('Welcome to Node Tutorial')

const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
    }
    const second = result;
    writeFile('./content/async-result.txt',
    `The results are here: ${first}, ${second}`,
    (err, result) => {
      if (err) {
        console.log(err)
      }
      console.log(result)
    }
    )
  })
})
