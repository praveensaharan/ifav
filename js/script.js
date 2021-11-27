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
      const loadText= document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

const searchItem = () => {
    const value = document.getElementById("search-input").value
    window.open("https://www.google.com/search?q=" + value, '_blank');
    document.getElementById("search-input").value = ""
}


// setTimeout(() => {
//   const loading = document.querySelector('.loading')
//   var x = 0
//   while (x < 101) {
//     loading.style.transform = `translateY(-${x}%)`
//     x += 0.001
//     console.log(x)
//   }
// }, 4000);


