let DATEINFO = document.getElementById("date-info");
let NEWDATE= document.getElementById("new-date");
let CLICKBTN = document.getElementById("click-btn");
let heads = new Headers;

heads.append("X-RapidAPI-Host", "numbersapi.p.rapidapi.com")
heads.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209")


const fun = (day,month)=>{
    let url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`
    let req = new Request(url,{
        method:"GET",
        headers:heads
    })
    fetch(req).then((data)=>{
        return data.json()
    }).then((json)=>{

      DATEINFO.innerHTML = json.text
     NEWDATE.innerHTML = `What happened on ${day}\/${month}\/${json.year}`;


    });
};
const CLICKEVENT = (obj)=>{
  let newDay = document.getElementById("click-day").value;
  let newMonth = document.getElementById("click-month").value;
  fun(newDay,newMonth)
}
CLICKBTN.addEventListener("click",CLICKEVENT,false)
