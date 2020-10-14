// ************ NAV **************
const navbar = $('#nav');

window.onscroll = function() {
    if (navbar.offset().top > 0 ) {
        navbar.addClass('hasbg');
    } else {
        navbar.removeClass('hasbg');
    }
}

$('#nav-menu-toggle-icon').click(function(){
    if($('#toggle-input:checked').length == 0) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
})

// ************ BODY **************
    // -------- REVIEW SECTION ----------
    const sliderItem = $('#review-section #slider .slider-item');
    const sliderTargetIcon = $('.slider-target-icon');
    const slider = document.getElementById('slider');
    
    // Slider for button on mobile screen
    function showReview(index) {
        var range = sliderItem[2].offsetLeft;
        sliderTargetIcon.removeClass('active');
        sliderTargetIcon[index].classList.add('active');
        slider.scrollLeft = index*range;
    }
    // Slider for click on item on large screen
    var maxMobileScreen = window.matchMedia("(max-width: 425px)");

    function sliderShow(index) {
        var itemWidth = sliderItem.outerWidth();
        var gap = 20;
        var middleScreen = (document.body.offsetWidth)/2;
        var largeScreen = checkScreen(maxMobileScreen);
        if ( !largeScreen ) {
            slider.scrollLeft = (index*itemWidth + index*20 + itemWidth/2) - middleScreen;
        }
    }
    
    // Function to set the slider item in middle on load (if large screen)
    function checkScreen(x) {
        if (x.matches) {
            return true;
        } else {
            return false
        }
    }
    sliderShow(2);
    //  Run the first time
    checkScreen(maxMobileScreen);
    // Run when screen change
    maxMobileScreen.addEventListener('change',checkScreen);

// ************ BODY **************
const inboxInput = $('.inboxbar #inboxbar');
const inboxBtn = $('.btn#footer-btn');

function checkVal(val) {
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)) {
        return true;
    } else {
        return false;
    }
}

inboxInput.keydown(function(e){
    var val = inboxInput.val();
    var keyCode = e.keyCode;
    if (keyCode === 13) {
        if (checkVal(val)) {
            inboxInput.attr('data-check','true');
            inboxInput.val('');
        } else {
            inboxInput.attr('data-check','false');
            inboxInput.attr('placeholder','johnmadden/mail')
        }
    }
})

inboxBtn.click(function(){
    var val = inboxInput.val();
    if (checkVal(val)) {
        inboxInput.attr('data-check','true');
        inboxInput.val('');
    } else {
        inboxInput.attr('data-check','false');
        inboxInput.attr('placeholder','johnmadden/mail')
    }
})



// ************ SECTION FADE IN WHEN SCROLL DOWN **********

const section = $('main section');

function showSection() {
    var currentBottomWindow = window.pageYOffset + window.innerHeight;
    for (let i = 0 ; i < section.length ; i++) {
        if (section[i].offsetTop < currentBottomWindow) {
            section[i].style.opacity = "1";
            section[i].style.transform = "translateY(0)";
        } else {
            section[i].style.opacity = "0";
            section[i].style.transform = "translateY(-5px)";
        }
    }
}

showSection();

document.addEventListener('scroll',showSection)