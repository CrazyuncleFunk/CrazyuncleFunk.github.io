var BODY = document.getElementById("nasa-pic");
var TEX = document.getElementById("text1");
var BOX = document.getElementById("text-box");
var INFO = document.getElementById("info");
var TITLE = document.getElementById("title");
let reep;
let head = new Headers();
head.append("X-RapidAPI-Host", "NasaAPIdimasV1.p.rapidapi.com");
head.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209");
head.append("Content-Type", "application/x-www-form-urlencoded");
let url ="https://NasaAPIdimasV1.p.rapidapi.com/getPictureOfTheDay" ;
let req = new Request(url,{
  method:"POST",
  headers:head
});

const nasa = ()=>{
  fetch(req).then((result)=>{
  return result.json()
}).then((data)=>{
  console.log(data)
   reep = data;
  let pro = data.contextWrites.to.hdurl;
  let image = JSON.stringify(pro)
  console.log(image)
  BODY.setAttribute("style", `background-image: url(${image})`)

  TEXTCHANGE();
}).catch((err)=>{
  console.log(err)
  
});
}
nasa();
const TEXTCHANGE = ()=>{
  TEX.innerHTML = reep.contextWrites.to.explanation;
  INFO.innerHTML = "Click this box to hide it then click the title to see it again."
};
const boxUpdate = (clickObj)=>{
  BOX.setAttribute("style", "display:none");
}

BOX.addEventListener("click",boxUpdate, false);

TITLE.addEventListener("click",function(){
  BOX.setAttribute("style", "display:block")
})
