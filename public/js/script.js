(function () {
    drawWelcome();
    window.onresize = drawWelcome;

    var navHome = document.getElementById("nav-home");
    navHome.onclick = smoothScroll("welcome");

    var navAbout = document.getElementById("nav-about");
    navAbout.onclick = smoothScroll("about");
    
    var navExperience = document.getElementById("nav-experience");
    navExperience.onclick = smoothScroll("experience");
    
    // When the user scrolls to the experience section, the cards flip
    window.onscroll = docScroll;
    
})();


function docScroll() {
    var experience = document.getElementById("experience");
    var exp = document.getElementsByClassName("exp-cell");
   
    if(document.body.scrollTop >= experience.offsetTop-400) {
         console.log("asd");
        for(var x=0;x<exp.length;x++) {
            exp[x].classList.add("exp-flip");
        }
    }
}

// Function for screen to scroll to the div section
function smoothScroll(div) {
    if (div == "welcome") {
        return function () {
            window.scroll({
                top: -70,
                left: 0,
                behavior: 'smooth'
            });
            return false;
        }
    }
    return function () {
        var intro = document.getElementById(div);
        window.scroll({
            top: intro.offsetTop - 70,
            left: 0,
            behavior: 'smooth'
        });
        return false;
    }
}

// Draws the heartbeat animation and resizes the panes on browser resize
function drawWelcome() {
    var wm = document.getElementById("welcomeMessage");
    var height = window.innerHeight;
    var width = window.innerWidth;

    var welcome = document.getElementById("welcome");
    var rows = document.getElementsByClassName("row");

    if (height > 400) {
        wm.style.fontSize = height * 0.20 + "px";
        for (var x = 0; x < rows.length; x++) {
            rows[x].style.minHeight = (height - 70) + "px";
            rows[x].style.maxWidth = (width) + "px";
        }

        // The heartbeat animation
        var heartDiv = document.getElementById("heart-div");
        heartDiv.style.height = window.innerHeight + "px";
        heartDiv.style.width = window.innerWidth + "px";

        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.style.height = canvas.height + "px";
        canvas.style.width = canvas.width + "px";

        var height = window.innerHeight;
        var width = window.innerWidth;
        ctx.strokeStyle = " #f9d3d2";

        ctx.moveTo(0, height * 0.6);
        ctx.lineTo(width * 0.35, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.35, height * 0.6);
        ctx.lineTo(width * 0.37, height * 0.5);
        ctx.stroke();

        ctx.moveTo(width * 0.37, height * 0.5);
        ctx.lineTo(width * 0.39, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.39, height * 0.6);
        ctx.lineTo(width * 0.43, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.43, height * 0.6);
        ctx.lineTo(width * 0.45, height * 0.68);
        ctx.stroke();

        ctx.moveTo(width * 0.45, height * 0.68);
        ctx.lineTo(width * 0.49, height * 0.3);
        ctx.stroke();

        ctx.moveTo(width * 0.49, height * 0.3);
        ctx.lineTo(width * 0.55, height * 0.77);
        ctx.stroke();

        ctx.moveTo(width * 0.55, height * 0.77);
        ctx.lineTo(width * 0.58, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.58, height * 0.6);
        ctx.lineTo(width * 0.62, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.62, height * 0.6);
        ctx.lineTo(width * 0.64, height * 0.53);
        ctx.stroke();

        ctx.moveTo(width * 0.64, height * 0.53);
        ctx.lineTo(width * 0.66, height * 0.6);
        ctx.stroke();

        ctx.moveTo(width * 0.66, height * 0.6);
        ctx.lineTo(width, height * 0.6);
        ctx.stroke();
    }
}
