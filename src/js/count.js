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