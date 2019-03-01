var curIndex = 0,
    imgDuration = 4000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'topslideshow/14kitchen2.webp',
        'topslideshow/01sconesOnBalcony.webp',
        'topslideshow/07viewDownEstuary2.webp',
        'topslideshow/02loungeLookingIn.webp',
        'topslideshow/03viewDownEstuary.webp',
        'topslideshow/05estuaryFromLounge.webp',
        'topslideshow/06paddleBoardOnEstuary.webp',
        'topslideshow/08kitchen.webp',
        'topslideshow/09estuaryThroughBlind.webp',
        'topslideshow/10viewAcrossEstuary.webp',
        'topslideshow/11loungeBlueSofa.webp',
        'topslideshow/12doubleBedroom.webp',
        'topslideshow/13twinBedroom.webp']


function buildSlideShow(arr) {
    for (i = 0; i < arr.length; i++) {
        var img = document.createElement('img');
        img.className = "sliderimg";
        img.src = arr[i];
        slider.appendChild(img);
    }
}


function slideShow() {
    function fadeIn(e) {
        e.className = "fadeIn";
    };
    function fadeOut(e) {
        e.className = "";
    };

    fadeOut(slides[curIndex]);

    curIndex++;
    if (curIndex == slides.length) {
        curIndex = 0;
    }

    fadeIn(slides[curIndex]);

    setTimeout(slideShow, imgDuration);
};


buildSlideShow(imgArray);
slideShow();
