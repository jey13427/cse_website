for(let i = 0; i < 15; i++){
    let parentEl = document.createElement("div");
    parentEl.classList.add("strand");
    parentEl.innerHTML = `
      <div class="top" style="animation-delay:${i * -0.2}s"></div>
      <div class="bottom" style="animation-delay:${-1.5 - (i * 0.2)}s"></div>
    `
    document.querySelector("body").appendChild(parentEl);
  }