const msg = document.querySelector("#msg")


var windowWidth = window.innerWidth;

var horizontalLength = document.querySelector(".element-wrapper").scrollWidth;

var distFromTop = document.querySelector(".horizontal-section").offsetTop;

var scrollDistance = distFromTop + horizontalLength - windowWidth;

document.querySelector(".horizontal-section").style.height = horizontalLength + "px";

window.onscroll = function() {
    var scrollTop = window.pageYOffset;

    if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
        document.querySelector(".element-wrapper").style.transform = "translateX(-"+(scrollTop - distFromTop)+"px)";
    }
}


