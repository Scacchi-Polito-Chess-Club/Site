slideIndex = 0;

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("hamburgerMenu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("hamburgerMenu").style.width = "0%";
}

window.onload = function(event) {
  var path = window. location. pathname;
  var page = path. split("/"). pop();
      
  if (page == "events.html")
  {
    calendar();
    resizeCalendar();
  }
      

  if (page == "otbtournaments.html")
    carousel();

  assignPopup();
  flexFont();
};

window.onresize = function(event) {
  var path = window. location. pathname;
  var page = path. split("/"). pop();

  if (page == "events.html")
      resizeCalendar();

  flexFont();
};

//#region Carousel

function carousel() {
  
  var images = [
    "url(./images/tournaments00/photo_2022-10-23_17-49-41.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-49-42.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-49-49.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-07.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-08 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-08.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-10.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-12.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-13 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-13.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-15 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-15.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-16.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-17.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-18 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-18.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-19.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-20.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-21.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-30.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-31 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_17-50-31.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-54-15 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-54-15.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-54-16.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-54-17.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-11.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-13.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-18.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-23 (2).jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-23.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-25.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-26.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-27.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-29.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-30.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-31.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_19-55-32.jpg)",
    "url(./images/tournaments00/photo_2022-10-23_21-54-39.jpg)"
  ];

  var x = document.getElementById('carousel');
  if(slideIndex > images.length) {slideIndex = 0;}
  x.style.backgroundImage = images[slideIndex++];

  setTimeout(carousel, 4000); // Change image every 2 seconds
}
//#endregion

//#region PopUp Functions

function assignPopup() {
    var as = document.getElementsByTagName("a");
    
    for (var i = 0; i < as.length; i++)
    {
        if(as[i].getAttribute("href") == "#" || as[i].getAttribute("href") == "")
        {
            as[i].setAttribute("onclick", "openPopup()");
        }
    }
}

function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("openPopup");
    setTimeout(() => {  popup.classList.remove("openPopup"); }, 2000);
}

//#endregion PopUp Functions

//#region Calendar

function calendar() {

  const events = [
    new Date(2022, 4, 20, 0, 0, 0, 0),
    new Date(2022, 4, 27, 0, 0, 0, 0)
  ];

  const date = new Date();

const renderCalendar = () => {
  
  // get the day of today
  date.setDate(1);

  // get the div containing the days
  const monthDays = document.querySelector(".days");

  // calculate the last day (1-31) of the current month
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  // calulate the last day (1-31) of the month before
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  // calculate the day (0-6) of today
  const firstDayIndex = date.getDay();

  // calulate the day (0-6) of the last day of the current month
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " " + date.getFullYear();

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  // prepare the days of the month before to be printed
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {

    // color days that have an events on it
    var set = false;
    events.forEach(event => {
      if (event.getDate() === i && event.getMonth() === date.getMonth() && event.getFullYear() == date.getFullYear()){
        var id = i.toString().concat("/").concat(event.getMonth().toString().concat("/").concat(event.getFullYear().toString()));
        days += `<div class="event" id="${id}" onclick="eventPopup(this.id)">${i}</div>`;
        set = true;
      }
    });

    if (set)
      continue;

    // fill month with all the days
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } 
    else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }
  
  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
}

function eventPopup(id) {
  
  var titles = new Map([
    ['20/4/2022', '20 Maggio, Incontro con ingeneria matematica, aula 4I'],
    ['27/4/2022', '27 Maggio, Incontro con ingeneria informatica, aula 2P'],
  ]);
  var contents = new Map([
    ['20/4/2022', 'Oltre alla teoria inerente ad aperture, medio gioco e finali, si possono analizzare gli scacchi attraverso la teoria dei giochi. Di questo campo di studio ci parlera il professor Massari, spiegandoci così come due avversari si devono muovere sulla scacchiera per massimizzare le loro chance di raggiungere l\'ambito scacco matto!'],
    ['27/4/2022', 'Chi non ha mai perso una partita contro un motore scacchistico? Come é possibile che un accozzaglia di circuiti riesca a prevedere tutti i miei piani e a sfruttare anche la più piccola debolezza della mia impenetrabile difesa 300? Il professor Squillero condividerà con noi i segreti di Deep Blue, Alpha Zero, Stockfish... per comprendere come la macchina ha superato l\'uomo.'],
  ]);

  var text = titles.get(id);
  const title = document.querySelector(".eventPopupTitle");
  title.innerHTML = `<h1>${text}</h1>`;

  text = contents.get(id);
  const container = document.querySelector(".eventPopupMessage");
  container.innerHTML = `<h1>${text}</h1>`;

  let popup = document.getElementById("eventPopupContainer");
  popup.classList.add("openPopup");
}

function closeEventPopup() {
  let popup = document.getElementById("eventPopupContainer");
  popup.classList.remove("openPopup");
}

function resizeCalendar() {
    let cc = document.getElementById("containerCalendar");
    let h = cc.clientHeight;
    let w = cc.clientWidth;
    let a = h*0.1;

    if (w < h)
      a = w*0.1;

    document.documentElement.style.fontSize = a.toString().concat("%");
}

function flexFont() {
  var path = window.location.pathname;
  var page = path. split("/"). pop();
  var divs = document.getElementsByClassName("flexFont");
  var coeff;

  switch(page)
  {
      case "index.html":
          coeff = 0.05;
          break;
      case "events.html":
          coeff = 0.10;
          break;
      default:
          coeff = 0.05;
          break;
  }

  for(var i = 0; i < divs.length; i++) {
      
      var relFontSizeWidth = divs[i].offsetWidth*coeff;
      var relFontSizeHeight = divs[i].offsetHeight*coeff;
      var relFontSize = relFontSizeWidth;

      if (relFontSizeHeight < relFontSizeWidth)
          relFontSize = relFontSizeHeight;

      divs[i].style.fontSize = relFontSize+'px';
  }
};

//#endregion

//#region Work in Progress

function workInProgress() {

  let head = document.getElementById("header");
  let foot = document.getElementById("footer");
  let content = document.getElementById("workInProgress");
  let hfin = window.innerHeight - head.clientHeight - foot.clientHeight;
  var x = hfin.toString().concat("px");
  content.style.height = x;
}

//#endregion