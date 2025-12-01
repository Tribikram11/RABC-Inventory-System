const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())


app.get('', () => {

})

app.post('', () => {

})

app.put('', () => {

})

app.delete('', () => {

})


app.listen(3000)