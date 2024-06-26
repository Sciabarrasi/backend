const express = require('express');
const app = express();
const port = 8080;

const MySql = require('./Container');
const prods = new MySql("products");

const Sqlite = require('./Container');
const msgs = new Sqlite("messages");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('./public', express.static(__dirname + './public'));
app.set("view engine", 'ejs')

const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

httpServer.listen(process.env.PORT || port, () =>{
    console.log(`Server: htpps://localhost:${port}`);
});

io.on("connection", async (socket) =>{
    io.sockets.emit("arr-producto", await prods.selectTable());
    io.sockets.emit("arr-chat", await msgs.selectTable());

    socket.on("data-productos", async (data) =>{
        await prods.insertInTable(data)
        io.sockets.emit("arr-producto", await prods.selectTable);
    });
    socket.on("data-chat", async (data) =>{
        await msgs.insertInTable(data);
        io.sockets.emit("arr-chat", await msgs.selectTable());;
    });
});

app.get('/', (req, res) =>{
    res.render('pages/scoket.ejs');
});

app.get("/:id", async(req, res) =>{
    try{
        const { id } = req.params;
        const prod = await prods.selectFromTableById(id);
        res.json(prod);
    }catch(error){
        res.json({ error: error });
    }
});

app.put("./:id", async(req, res) =>{
    try{
        const { id } = req.params;
        const { title, price, thumbnail } = req.body;
        await prods.updateFromTableById(id, title, price, thumbnail)
        res.json({ succes: "producto modificado" });
    }catch(error){
        res.json({ error: error });
    }
});

app.delete("./:id", async(req, res) =>{
    try{
        const { id } = req.params;
        await prods.deleteFromTableById(id)
        res.json({ succes: "Producto borrado" });
    }catch(error){
        res.json({ error: error });
    }
});

app.delete('/', async(req, res) =>{
    try{
        await prods.deleteWholeTable()
        res.json({ succes: "Todos los productos borrados" });
    }catch(error){
        res.json({ error: error });
    }
});