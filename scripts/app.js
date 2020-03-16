    // Sticky Header Function
    // TODO Write a performant scroll event handler.
    // Use a technique of your choice.
    // Use of jQuery is optional.
    // TIP: Depending on the approach you might consider browser compatibility issues, and present alternatives.

    let bodyElement = document.querySelector('body');
    let Scroll = () => {
        let pixels_scrolled = window.scrollY;
        if (pixels_scrolled > 17){
            bodyElement.classList.add('ec-sticky');
        }else{
            bodyElement.classList.remove('ec-sticky');
        }
    };
    bodyElement.onscroll = function(){
        Scroll();
    };


    let backtop = document.getElementsByClassName('.backtop-btn');
    const MyBnt = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    backtop.onclick = function () {
        MyBnt();
    };
