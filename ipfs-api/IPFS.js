//Required modules
const IpfsNode = require('./node.js');
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());

const ipfs = new IpfsNode();
//Addfile router for adding file a local file to the IPFS network without any local node
app.post('/addfile', async function(req, res) {
  res.send(await ipfs.addMessage(req.body));
});
//Getting the uploaded file via hash code.
app.get('/getfile/:hash', async function(req, res) {
  hash = req.params.hash;

  res.send(await ipfs.getMessage(hash));
});

app.listen(3000, () => console.log('App listening on port 3000!'));
