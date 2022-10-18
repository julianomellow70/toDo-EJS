require(`dotenv`).config();

const express = require(`express`);

const app = express();

//setando variaveis do ejs
app.set('view engine', 'ejs');
app.set('views','./public/');

app.use(express.static(__dirname + '/public'));


const port = process.env.PORT;

//rotas
app.get(`/`,(req,res)=>{
    let nome = `JULIANO`;
    res.render('index.ejs',{nome: nome});
})


app.listen(port, ()=>{
    console.info(`Servidor online na porta (${port})`);
})