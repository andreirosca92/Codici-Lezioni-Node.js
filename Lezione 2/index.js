/*
02 Installazione


- es6 code snippet
- code-snippet
- npm
- npm installisense


*/
async function getData() {
  return Promise.resolve('data');
}

async function getMoreData(data) {
  return Promise.resolve(data + 'more data');
}

async function getAll() {
  const data = await getData();
  const moreData = await getMoreData(data);
  return `All the data: ${data}, ${moreData}`;
}

getAll().then((all) => {
  console.log('all the data')
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))