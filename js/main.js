var swiper = new Swiper(".slider-thumbs", {
  loop:true,
    spaceBetween: 0,
    slidesPerView: 0,
  });
  var swiper2 = new Swiper(".slider", {
    loop:true,
    spaceBetween: 0,
    thumbs: {
      swiper: swiper,
    },
  });

  // Navigation bar effect when scroll
  window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("sticky", window.scrollY>0)
  })

  //Responsive mode navigation menu toggle
  const hamburgeBtn = document.querySelector(".menu-btn")
  const clsBtn = document.querySelector(".close-btn")
  const naviBtn = document.querySelector(".navigator")

  hamburgeBtn.addEventListener("click", () => {
    naviBtn.classList.add("active")
  })

  clsBtn.addEventListener("click", () => {
    naviBtn.classList.remove("active")
  })
