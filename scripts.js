/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("hamburgerMenu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
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
    setTimeout(() => {  popup.classList.remove("openPopup"); }, 1500);
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

window.onload = function(event) {
    assignPopup();
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};
