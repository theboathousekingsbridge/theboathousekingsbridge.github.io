var curIndex = 0,
    imgDuration = 4000,
    slider = document.getElementById("slider"),
    slides = slider.childNodes;
    imgArray = [
        'topslideshow/14kitchen2.jpg',
        'topslideshow/01sconesOnBalcony.jpg',
        'topslideshow/07viewDownEstuary2.jpg',
        'topslideshow/02loungeLookingIn.jpg',
        'topslideshow/03viewDownEstuary.jpg',
        'topslideshow/05estuaryFromLounge.jpg',
        'topslideshow/06paddleBoardOnEstuary.jpg',
        'topslideshow/08kitchen.jpg',
        'topslideshow/09estuaryThroughBlind.jpg',
        'topslideshow/10viewAcrossEstuary.jpg',
        'topslideshow/11loungeBlueSofa.jpg',
        'topslideshow/12doubleBedroom.jpg',
        'topslideshow/13twinBedroom.jpg']


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
