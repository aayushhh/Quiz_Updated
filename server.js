const express = require('express')
const path = require('path')
const socketio= require('socket.io')
const http = require('http')
const app = express();
app.use(express.static('../Frontend'))
// var firebase=require('firebase').initializeApp({
//     databaseURL:"https://questions-7120a.firebaseio.com"
// })
// app.set('view engine', 'pug')

// app.get('/', (req,res)=>{
//     res.sendFile('question.html',{root:__dirname})
// });
// Get a reference to the database service
// var database = firebase.database();

// var ref = firebase.database().ref().child('node-client')
// var SessionRef= firebase.database().ref('Session/');
// SessionRef.push({
   
//    Question: "Question-1",
//    Option: "Option-1",

// // })

// function writeUserData(sessionId, Question, option, imageUrl) {
//     firebase.database().ref('Session/' + session).set({
//       Question: Question,
//       Option: option
      
//     });
//   }
  

//  var ref= firebase.database().ref('https://questions-7120a.firebaseio.com')


// var sessions = ref.child("Session")
// console.log(sessions)
// //console.log(ref)


//initialization of app object

//Create a server bia http
const server = http.createServer(app)
// inititate the variable io with server for connecion
const io = socketio(server)
// we give a path for frontend
app.use('/', express.static(path.join(__dirname, 'Frontend')))
//sed server cuz it  the same thing 
// app.listen(2345,() => console.log('Website hosted on port 2345'));
app.post('/submit', (req,res)=>{
    console.log(req.body);
    })
//For listening the client side 
io.on('connection',(socket)=>{
    console.log(" we got a forword from Client "+ socket.id)
    var id =socket.id
    socket.on('Faculty_Ques', (questionArray)=>{
        console.log("test",questionArray)
        // var con = firebase.database().ref('user');
       
        //save into firebase
        for(i=0; i<questionArray.length; i++){

            var seti = questionArray[i]
        }
        console.log("var"+seti);
        // consol
        // function writeData(){
        //                  firebase.database().ref("Sessions/1/question1").set({
        //                      Questions: document.getElementById("question").value,
        //                      option1: document.getElementById("option1").value,
        //                      option2: document.getElementById("option2").value,
        //                      option3: document.getElementById("option3").value,
        //                      answer: document.getElementById("answer").value,
            
        //                  })
        //              }
        socket.emit('msg',questionArray)
        // console.log(questionArray)
    
        
    });

        
})
//server on the localhost
server.listen(2345,()=> console.log('Website hosted on port 2345'));