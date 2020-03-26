    // Sticky Header Function
    // TODO Write a performant scroll event handler.
    // Use a technique of your choice.
    // Use of jQuery is optional.
    // TIP: Depending on the approach you might consider browser compatibility issues, and present alternatives.

    let last_known_scroll_position = 0;
    let ticking = false;
    const bodyElement = document.querySelector('body');

    function doSomething(scroll_pos) {
        if (scroll_pos > 17){
            bodyElement.classList.add('ec-sticky');
        }else{
            bodyElement.classList.remove('ec-sticky');
        }
    }

    window.addEventListener('scroll', function(e) {
        last_known_scroll_position = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(function() {
                setTimeout(function () {
                    doSomething(last_known_scroll_position);
                    ticking = false;
                }, 60);
            });

            ticking = true;
        }
    },{capture:true, passive:true});

    const backtop = document.querySelector('.backtop-btn');
    backtop.addEventListener('click', ()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
