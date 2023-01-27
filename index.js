const webSocket=require('ws');

const wss= new webSocket.Server({port:8080});

wss.on("connection", ws=>{

    console.log("connected");

    ws.on("close",()=>{

        console.log("connection terminated");
    })
})
