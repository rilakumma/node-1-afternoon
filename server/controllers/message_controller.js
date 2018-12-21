const messages = [];
let id =0;

module.exports = {
    readMessage: (req, res) => {
        res.json(messages);
    },
    createMessage: (req, res) => {
        id++;
        const message = {
            text: req.body.text,
            time: req.body.time,
            id: id,
        }
        messages.push(message);
        res.json(messages);
    },
    updateMessage: (req, res) => {
        let messageId = req.params.id;
        let messageIndex = messages.findIndex(message =>  {
            return message.id === parseInt(messageId)
        });
        
        if(messageIndex === -1){
            res.status(404).send(`Message id ${messageId} does not exist`);
        }else{
            messages[messageIndex].text = req.body.text;
            res.json(messages)
        }
    },
    deleteMessage: (req, res) => {
        let messageId = req.params.id;
        let messageIndex = messages.findIndex(message =>  { 
            return message.id === parseInt(messageId)
        } );
        
        if(messageIndex === -1){
            res.status(404).send(`Message id ${messageId} does not exist`);
        }else{
            messages.splice(messageIndex, 1);
            res.json(messages);
        }
        
    } ,
}
