// JavaScript code
/*=====================================toggle style switcher=====================*/
const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
  if(document.querySelector(".style-switcher").classList.contains("open"))
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
})
/*=====================================Theme Colors=====================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
      style.removeAttribute("disabled");
    }
    else
    {
      style.setAttribute("disabled", "true");
    }
  })
}


/*=====================================Dark mode=====================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun")
  dayNight.querySelector("i").classList.toggle("fa-moon")
  document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
  if(document.body.classList.contains("dark"))
  {
    dayNight.querySelector("i").classList.add("fa-sun")
  }
    else
    {
      dayNight.querySelector("i").classList.add("fa-moon")
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
	}
}



// dark mode
// let modeBtn = document.getElementById("dark-light");

// modeBtn.addEventListener("click", function () {
  //   if (document.body.className != "dark") {
    //     this.firstElementChild.src = "images/light.svg";
    //   } else {
      //     this.firstElementChild.src = "images/dark.svg";
      //   }
      //   document.body.classList.toggle("dark");
      // });
      
      setInterval(function() {
        document.title = "Diyorbek Juraev";
        setTimeout(function() {
          document.title = "Task 20";
        }, 1000);
      }, 2000);
      
      
  

// telegram
const telegramIcon = document.querySelector('.telegram');

window.addEventListener('scroll', function() {
  if (window.scrollY > (document.documentElement.scrollHeight - window.innerHeight) / 2) {
    telegramIcon.classList.add('telegram-visible');
  } else {
    telegramIcon.classList.remove('telegram-visible');
  }
});





// slider
$(document).ready(function(){
  $('.card-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
      0:{
        items: 1
      },
      600:{
        items: 3
      },
      1000:{
        items: 8,
        autoWidth: true,
        slideBy: 1
      }
    }
  });
});













