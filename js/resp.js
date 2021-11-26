var el = document.getElementById('overlayBtn');

el && el.addEventListener('click', swapper, false);
    burger = document.querySelector('.burger')
    navbar = document.querySelector('.navbar')
    navList = document.querySelector('.nav-list')
    rightNav = document.querySelector('.rightNav')


    burger.addEventListener('click', () => {
        rightNav.classList.toogle('v-class-resp')
        navList.classList.toogle('v-class-resp')
        navbar.classList.toogle('h-nav-resp')
    })


    function swapper() {
        toggleClass(document.getElementById('overlay'), 'open');
      }
      
      var el = document.getElementById('overlayBtn');
      if (el){
        el.addEventListener('click', swapper, false);
      
        var text = document.getElementById('overlayBtn');
        text.onclick = function(){
          this.innerHTML = (this.innerHTML === "Menu") ? "Close" : "Menu";
          return false;
        };
      }