const DATEINFO = document.getElementById("date-info");
const NEWDATE= document.getElementById("new-date");
const CLICKBTN = document.getElementById("click-btn");

//Here are the headers required to fetch the json from the api
let head = new Headers;
head.append("X-RapidAPI-Host", "numbersapi.p.rapidapi.com")
head.append("X-RapidAPI-Key", "5766f3ab18mshdf29754827636cfp167f93jsnb64c000dc209")

//This event takes the selected date and passes through the date function
const CLICKEVENT = (obj)=>{
  let newDay = document.getElementById("click-day").value;
  let newMonth = document.getElementById("click-month").value;
  DATEFUNCTION(newDay,newMonth)
}

//This function takes the selected day and month and sends them to the api and then changes the display to the returned json
const DATEFUNCTION = (day,month)=>{
    let url = `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`
    let req = new Request(url,{
        method:"GET",
        headers:head
    })
    fetch(req).then((data)=>{
        return data.json()
    }).then((json)=>{
      
      DATEINFO.innerHTML = json.text
     NEWDATE.innerHTML = `What happened on ${day}\/${month}\/${json.year}`;
    
     
    });
};
//This event listens for the submit button
CLICKBTN.addEventListener("click",CLICKEVENT,false)
