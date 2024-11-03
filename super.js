var score = 0
var start = alert("START QUIZ")
var quizNo1 = prompt("Q1 : What is the default value of the position property in CSS?");
var quizNo2 = prompt("Q2 : Which CSS property is used to change the background color?");
var quizNo3 = prompt("Q3 : What attribute is required for the <img> tag?");
var quizNo4 = prompt("Q4 : Which HTML tag is used to define an unordered list?");
var quizNo5 = prompt("Q5 : What does HTML stand for?");
var quizNo6 = prompt("Q6 : Which HTML element is used to define the title of a webpage?");
var quizNo7 = prompt("Q7 : What is the correct HTML element for inserting a line break?");
var quizNo8 = prompt("Q8 : How do you select an element with the class name (Example) in CSS?");
var quizNo9 = prompt("Q9 : Which property is used to change the font size in CSS?");
var quizNo10 = prompt("Q10 : How do you center text in CSS?");

if(quizNo1 === "static" || quizNo1==="Static" ){
   score = score + 1
}

if(quizNo2==="background-color"){
  score =  score + 1
}


if(quizNo3==="src" || quizNo3==="source"){
    score =  score + 1
}

if(quizNo4==="ul" || quizNo4==="<ul>"){
    score =  score + 1
}

if(quizNo5==="Hyper Text Markup Language" || quizNo5==="hyper text markup language" ||quizNo5==="Hyper text markup language"){
    score =  score + 1
}

if(quizNo6==="<title>" || quizNo6==="title"){
    score =  score + 1
}

if(quizNo7==="br" || quizNo7==="<br>"){
    score =  score + 1
}

if(quizNo8===".example" || quizNo8===".Example"){
    score =  score + 1
}

if(quizNo9===" font-size" || quizNo9===" Font-size"){
    score =  score + 1
}

if(quizNo10===" text-align: center;" || quizNo10==="text-align:center;"){
    score =  score + 1
}

alert("Score =10/" + score)

if(score>=6){
    alert("CONRATULATIONS YOU PASSED THE TEST")
}
else{
    alert("UNFORTUNATELY YOU FAILED THE TEST")
}