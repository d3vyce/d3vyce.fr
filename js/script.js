//Init
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);

  $(document).ready(function(){
    init();
  });
  
  function init(){
    //Auto margin calculator
    var navbarHeight = $("nav").height();
    var paddingTop = parseInt($("nav").css('padding-top'));
    var paddingBottom = parseInt($("nav").css('padding-bottom'));
    $('#main-content').css('margin-top', (navbarHeight + paddingTop + paddingBottom) + 'px');
      
    //Ripple
    var ripples = document.querySelectorAll('.ripple');
      for (var i = 0; i < ripples.length; i++) {
          ripples[i].addEventListener('mousedown', rippleEffect, false);
      }
  
      function rippleEffect(e){
          var width = this.clientWidth;
          var height = this.clientHeight;
          var rect = this.getBoundingClientRect();
          var posX = e.clientX - rect.left;
          var posY = e.clientY - rect.top;
          var size = Math.max(width, height);
          var effect = document.createElement('DIV');
          effect.className = 'effect';
          effect.style.width = size + 'px';
          effect.style.height = size  + 'px';
          effect.style.top = posY - size/2 + 'px';
          effect.style.left = posX - size/2 + 'px';
  
          this.appendChild(effect);
          var parent = this;
        
          setTimeout(function() {
              parent.removeChild(effect);
          }, 750);
      }
    
    //Prevent horizontal scroll of page using keyboard
    $(window).keydown(function(e){
      if(e.which == 37 || e.which == 39){
        e.preventDefault();
      }
    });
    
    //Scroll hide image
    $(window).scroll(function () {
      $(this).scrollTop() > 50 ? $('#scroll').fadeOut() : $('#scroll').fadeIn()
    });
  }


  