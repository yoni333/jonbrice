//npm dependencies  - express , body-parser 

var express = require('express');

var app = express();

let data = {
    team: [
        { id:1, name: 'yuval', age: 32, job: 'fed' },
        { id:2, name: 'ron', age: 21, job: 'devops' }
    ],projects:[
        { id:1, name: 'shahar project'},
        { id:2, name: 'uploader' }
    ]
}
app.use(express.static('public'))

app.get('/hello', function (req, res) {
    res.send('Hello World!')
})


app.get('/team', function (req, res) {
    res.set('Content-Type', 'text/html');
    let answer= '<h4>Hello World!</h4>';
    answer+='<p>our team</p>'
    res.send(answer) 
    
})


app.get('/members', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.json(data)
       
})

app.get('/member/:id' , function(req,res){
    console.log(req.params.id);
    let id =req.params.id;
    res.header('Content-Type', 'application/json');
    let answer = data.team.filter(member=>member.id===parseInt(id))
    res.json( answer  );

})

app.get('/projects' , function(req,res){
   
    res.header('Content-Type', 'application/json');
    let answer = data.projects
    res.json( answer  );

})





app.listen(3000);
console.log('Server is running on port 3000...');