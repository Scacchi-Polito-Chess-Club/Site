let toggle = false;

window.onload = function() {
    assignPopup();
    flexFont();
};
window.onresize = function() {
    flexFont();
};

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    let header = document.getElementById("header");
    let preContent = document.getElementById("preContent");
    let menuList = document.getElementById("menu-list");
    let hamburger = document.getElementById("hamburger");
    let logoPoli = document.getElementById("logoPoli");
    let logoClub = document.getElementById("logoClub");

    if (window.matchMedia("(max-width: 770px)").matches || window.matchMedia("(max-height: 650px)").matches)
    {
        if (window.pageYOffset > 120)
        {
            if (toggle)
            return;
        }
        else if (window.pageYOffset < 110)
        {
            if (!toggle)
            return;
        }
        else {return;}
    }
    else {
        if (window.pageYOffset > 230) 
        {
            if (toggle)
                return;
            
            hamburger.style.display = "block";
        } 
        else if (window.pageYOffset < 220)
        {   
            if (!toggle)
                return;
    
            hamburger.style.display = "none";
        }
        else {return;}
    }

    toggle = !toggle;
    header.classList.toggle("nav-shrink");
    preContent.classList.toggle("preContent-shrink")
    menuList.classList.toggle("menu-list-shrink");
    logoPoli.classList.toggle("logoPoli-shrink");
    logoClub.classList.toggle("logoClub-shrink");
    header.classList.toggle("sticky");
} 

function openNav() {
    document.getElementById("hamburgerMenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("hamburgerMenu").style.width = "0%";
} 

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

function flexFont() {
    var path = window. location. pathname;
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