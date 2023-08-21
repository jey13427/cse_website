
// document.addEventListener("DOMContentLoaded", function(){
//     // add padding top to show content behind navbar
//     navbar_height = document.querySelector('.navbar').offsetHeight;
//     // document.body.style.paddingTop = navbar_height + 'px';
//   }); 
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
  function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }
  
  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
  
  }
  
  //When the document is ready
  $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
      //Checking if each items to animate are 
      //visible in the viewport
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
  // dsfdsgs
  $(function() {
    $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});
////responsive counter
var myDiv = document.getElementById('myDiv');
var isDivVisible = false; /* keep track of whether the division is visible */

function onScroll() {
  var scrollPosition = window.scrollY;
  var divPosition = myDiv.getBoundingClientRect();
  
  if (divPosition.top < window.innerHeight && divPosition.bottom >= 0 && !isDivVisible) {
    /* the division is visible on the screen */
    isDivVisible = true;
    myDiv.classList.remove('hidden'); /* remove the "hidden" class to display the division */
    myFunction(); /* call the function associated with the division */
    window.removeEventListener('scroll', onScroll); /* remove the event listener */
  }
}

window.addEventListener('scroll', onScroll);

function myFunction() {
  /* the function associated with the division */

    /* your function code here */const counters = document.querySelectorAll(".counter");
const speed = 2; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / target*5;

    // console.log(inc);
    // console.log(count);

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = count + inc;
      // Call function every ms
      setTimeout(updateCount, 5);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
}
var bars = document.querySelectorAll('.bar');
function animateBars() {
  for (var i = 0; i < bars.length; i++) {
    var value = bars[i].getAttribute('data-value');
    bars[i].style.height = value + '%';
    console.log(bars[i]);
  }
}

function startAnimation() {
  for (var i = 0; i < bars.length; i++) {
    var value = bars[i].getAttribute('data-value');
    var barHeight = bars[i].offsetHeight;
    console.log(barHeight);
    if (barHeight < (value / 100 * 300)) {
      bars[i].style.animationPlayState = 'running';
    }
  }
}

window.addEventListener('scroll', function() {
  var chartTop = document.querySelector('.chart').getBoundingClientRect().top;
  if (chartTop < window.innerHeight * 1) {
    animateBars();
    startAnimation();
    window.removeEventListener('scroll', arguments.callee);
  }
});

const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

st.flap.addEventListener('transitionend', () => {

    if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    }

})

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});

document.addEventListener('click', (e) => st.clickHandler(e));