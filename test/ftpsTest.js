const {ftps,objectFTPSOpt,objectFTPSReq} = require('ftps-cg-lib');
const express = require('express');
const app = express();
const {constants, log} = require('utils-nxg-cg');
app.use(express.json());
app.post('/', async(req, res)=>{
  let properties = {...objectFTPSReq};  
  //Basic parameters for stablish connection with sftp server.  
  properties.host=req.body.host;
  properties.port=req.body.port;
  properties.username=req.body.username;
  properties.password=req.body.password;
  properties.flag=req.body.flag;
  properties.path=req.body.path;
  properties.file=req.body.file;
  properties.secure=req.body.secure;
  properties.content=req.body.content;
  properties.encoding=req.body.encoding;
  properties.oldName=req.body.oldName;
  properties.newName=req.body.newName;

  /*properties.flag=req.body.path;

  properties.newName=req.body.newName;
  properties.localPath=req.body.localPath;
  properties.clientKey=req.body.clientKey;
  properties.clientCert=req.body.clientCert;
  properties.serverCert=req.body.serverCert;*/

  try{
    log.info("Conectando");
    const result = await ftps({data:properties},{});
    log.info("resultado", result);
    res.json(result);
  }

  catch(err){
    log.error("err", err);
    //res.status(500).json(err);
    res.status(500).json(err.toString());
  }
})

app.listen(3000, ()=>{
  console.log("Server ejecutandose en el puerto 3000");
});