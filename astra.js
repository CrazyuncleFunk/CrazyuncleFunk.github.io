const BODY = document.getElementById("nasa-pic");
const TEXT = document.getElementById("text1");
const BOX = document.getElementById("text-box");
const INFO = document.getElementById("info");
const TITLE = document.getElementById("title");
//This varible will hold the json recieved from the nasa api
let pictureJson;
//This sets all the headers needed to fetch the json from the nasa api
let head = new Headers();
head.append("X-RapidAPI-Host", "NasaAPIdimasV1.p.rapidapi.com");
head.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209");
head.append("Content-Type", "application/x-www-form-urlencoded");
let url ="https://NasaAPIdimasV1.p.rapidapi.com/getPictureOfTheDay" ;
//This request pairs the api's url with headers needed 
let req = new Request(url,{
  method:"POST",
  headers:head
});
//This function sends the request to the nasa api and recieves the json
const NASA = ()=>{
  fetch(req).then((result)=>{
  return result.json()
}).then((data)=>{
   pictureJson = data;
  let temp = data.contextWrites.to.hdurl;
  let image = JSON.stringify(temp)
  //This changes the background image to the nasa picture of the day
  BODY.setAttribute("style", `background-image: url(${image})`)
  //This evokes the text function 
  TEXTCHANGE();
}).catch((err)=>{
  //This logs any errors that may occur during the fetch
  console.log(err)
  
});
}
NASA();
//This function changes the placeholder loading text to a discription of the nasa picture
const TEXTCHANGE = ()=>{
  TEXT.innerHTML = pictureJson.contextWrites.to.explanation;
  INFO.innerHTML = "Click this box to hide it then click the title to see it again."
};

//This listens for the box that contains the discription of the picture being click then hides the box
BOX.addEventListener("click",function(){
BOX.setAttribute("style", "display:none");
}, false);
//This listens for the title being clicked with then show the discription box again
TITLE.addEventListener("click",function(){
  BOX.setAttribute("style", "display:block")
})
