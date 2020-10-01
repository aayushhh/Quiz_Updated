'use strict';

//grab the form 
cont form = document.querySelector('/form');


//grab getInputValues
const Question = form.querySelector('#question');
const Option1= form.querySelector('#option1');
const Option2 = form.querySelector('#option2');
const Option3 = form.querySelector('#option3');



//config firebase
var firebaseConfig = {
    apiKey: "AIzaSyDm7tHgFrpyfMRaRnaYgtC3dwa0jvkSZf8",
    authDomain: "questions-7120a.firebaseapp.com",
    databaseURL: "https://questions-7120a.firebaseio.com",
    projectId: "questions-7120a",
    storageBucket: "questions-7120a.appspot.com",
    messagingSenderId: "436649221104",
    appId: "1:436649221104:web:1ec4350e205a211c8c9b35",
    measurementId: "G-M0DP3V20LE"
  };
  firebase.initializeApp(firebaseConfig);

    $('#form').submit(function(e) {
        e.preventDefault();
     
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
            Question: $('.question').val(),
            Option1: $('.option1').val(),
            Option2: $('.option2').val(),
            Opition3: $('.option3').val()
        });
     
        $('.success-message').show();
     
        $('#form')[0].reset();
    });