const TEXT = document.getElementById("text");
const CHUCK = document.getElementById("chuck-norris");
const DADJOKE = document.getElementById("dad-joke");
const NEWJOKE = document.getElementById("new-joke");
const TWEET = document.getElementById("tweet-quote");
let current;




CHUCK.addEventListener("click",(clickObj)=>{
newJoke();
},false);


DADJOKE.addEventListener("click",function(){
  dadJoke();
},false);

/*NEWJOKE.addEventListener("click",function(){
  newOne();
},false);*/


function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
TWEET.addEventListener("click",()=>{
 openURL("https://twitter.com/intent/tweet?&text=" + encodeURIComponent(current))
});




let joke;
const newJoke = () =>{

const url = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
let head = new Headers();
head.append("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
head.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209")
head.append("accept", "application/json")

let req = new Request(url, {
    method:"GET",
    headers:head
})

fetch(req ).then(function(result){
 return result.json();
}).then(function(data){
    joke = data["value"];
  current = joke;
  TEXT.innerHTML = data["value"];
}).catch((err)=>{
  console.log(err)
});;
  };
const newOne = () =>{

const url = "https://joke3.p.rapidapi.com/v1/joke";
let head = new Headers();
head.append("X-RapidAPI-Host", "joke3.p.rapidapi.com")
head.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209")
head.append("accept", "application/json")

let req = new Request(url, {
    method:"GET",
    headers:head
})

fetch(req ).then(function(result){
 return result.json();
}).then(function(data){
    joke = data.content;
  current = joke;
  TEXT.innerHTML = data.content;
  console.log(data.content)
}).catch((err)=>{
  console.log(err)
});
  };

const dadJoke = () =>{
  let req=new XMLHttpRequest();
  req.open("GET","https://icanhazdadjoke.com/slack",true);
  req.send();
  req.onload=function(){

  json = JSON.parse(req.responseText);
  TEXT.innerHTML = json.attachments[0]["text"];
    current = json.attachments[0]["text"];
}
}
