const fs = require('fs');
fs.unlinkSync('out.txt'); 
const e = require('os').EOL;
let prompt = require('prompt');
let http = require('http');
let express = require('express');
let bodyParser=require('body-parser');
let app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(function(req,res,next){
let logs=fs.createWriteStream("login.txt",{'flags':'a'});
logs.write("\r\n file access time" + new Date() + "\n");
logs.end();
next();
})
app.get('/',function(req,res){
res.sendFile('form.html',{root:'./'});
});
app.post('/',function(req,res){
let filename=req.body.path; 
const n=req.body.size;
fs.readFile(filename,'utf-8',function (error,data){
if (error) throw error;
     const parsed = JSON.parse(data);
let arr = [];
for(var x in parsed.students){
arr.push(parsed.students[x].Name);

}
let shuffle = require('shuffle-array');
shuffle(arr);
console.log(arr);

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let b = []
let k = 1;
let bigin = 0
while(arr.length > n){
let slice = require('array-slice');

 b = arr.slice(bigin,n);
console.log(`${k} team`);

fs.appendFile('out.txt',`${k} team :${b} ${e}`, function (err) {
  if (err) throw err;
});
k++;
console.log(b);
arr.splice(bigin,n);

}
console.log(`the ${k} team`);
console.log(arr);
fs.appendFile('out.txt', `\n${k} team :${arr}`, function (err) {
  if (err) throw err;
});

});

console.log("\nhello");   //after completion of this i/o operation executed

});



let server = http.createServer((function(req,res){
res.writeHead(200,{'content-type':'text/plain'});
fs.readFile('out.txt','utf-8',function(err,ar){
if (err) throw err;
console.log(ar);
res.end(ar);
});



}));
app.listen(8009,function(){

});

