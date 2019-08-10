const TEXT = document.getElementById("text");
const CHUCK = document.getElementById("chuck-norris");
const DADJOKE = document.getElementById("dad-joke");
const NEWJOKE = document.getElementById("new-joke");
const TWEET = document.getElementById("tweet-quote");
//This varible will hold the current joke
let current;



//This listens for the chuck norris joke button and evokes the functions once clicked
CHUCK.addEventListener("click",(clickObj)=>{
NEWCHUCK();
},false);

//This listens for the dad joke button and evokes the functions once clicked
DADJOKE.addEventListener("click",function(){
  NEWDAD();
},false);



//This function takes a url and opens it in a 400px by 550px window
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
//This listens for the tweet button to be clicked the opens twitter with the joke copied into a tweet ready to post
TWEET.addEventListener("click",()=>{
 openURL("https://twitter.com/intent/tweet?&text=" + encodeURIComponent(current))
});




let joke;
//This function fetches a random chuck norris fact and changes the display text to the fact
const NEWCHUCK = () =>{

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

//This fuction requests a random dad joke from the dad joke api then changes the display text to the joke
const NEWDAD = () =>{
  let req=new XMLHttpRequest();
  req.open("GET","https://icanhazdadjoke.com/slack",true);
  req.send();
  req.onload=function(){

  json = JSON.parse(req.responseText);
  TEXT.innerHTML = json.attachments[0]["text"];
    current = json.attachments[0]["text"];
}
}
