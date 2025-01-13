const slogans = [
    " - build the university of your dreams!",
    " - your strategy, their future!",
    " - a university built by you!"
  ];
  
  const textElement = document.getElementById("animated-text");
  let sloganIndex = 0;
  let charIndex = 0;
  let typing = true;
  
  const typeSpeed = 100;
  const eraseSpeed = 33;
  const pauseAfterTyping = 2000;
  const pauseAfterErasing = 666;
  
  function animateText() {
    textElement.textContent = slogans[sloganIndex].slice(0, charIndex);
    
    if (typing) {
      if (charIndex < slogans[sloganIndex].length) {
        charIndex++;
        setTimeout(animateText, typeSpeed);
      } else {
        typing = false;
        setTimeout(animateText, pauseAfterTyping);
      }
    } else {
      if (charIndex > 0) {
        charIndex--;
        setTimeout(animateText, eraseSpeed);
      } else {
        typing = true;
        sloganIndex = (sloganIndex + 1) % slogans.length;
        setTimeout(animateText, pauseAfterErasing);
      }
    }
  }
  
  animateText();
  