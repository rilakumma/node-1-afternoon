const express = require('express');
const bodyParser = require('body-parser');
const mC = require('./controllers/message_controller');

const app = express();
app.use(bodyParser.json());
app.use( express.static( __dirname + '/../public/build'));

app.get('/api/messages', mC.readMessage);
app.post('/api/messages', mC.createMessage);
app.delete('/api/messages/:id', mC.deleteMessage);
app.put('/api/messages/:id', mC.updateMessage);

app.listen(3001, (res, req)=> {
    console.log("I am listening from port 3001!!!! 🍒")
})