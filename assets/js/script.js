
// Mobile screen hamburger menu
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle);


// Nab-bar dropdown menu
document.querySelector('.dropbtn').addEventListener('click', function(e) {
    e.preventDefault(); // Prevents the default anchor action
    const dropdown = this.nextElementSibling; // Finds the next element (the dropdown-content)
    
    // Toggle the dropdown display
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
});


// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', function (e) {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        // Toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of Body
        groupBody.classList.toggle('open');

        // CLose other open FAQ bodies
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach(function (otherGroup) {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });    

    });
});


// fixed navbar
let lastScrollTop = 0;
const navbar = document.getElementById("navBAR");

window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-220px"; 
    } else {
    // Scrolling up
    navbar.style.top = "0"; 
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile compatibility
});


// Nab-bar dropdown menu on Mobile devices
// Get the dropdown toggle and content
    // const dropdownToggle = document.querySelector('.dropdownToggle');
    // const dropdownContent = document.querySelector('.dropdownContent');

    // dropdownToggle.addEventListener('click', function(event) {
    // event.preventDefault(); 
    // dropdownContent.classList.toggle('show'); 
    // });

    // window.addEventListener('click', function(event) {
    // if (!event.target.matches('.dropdownToggle')) {
    //     if (dropdownContent.classList.contains('show')) {
    //     dropdownContent.classList.remove('show');
    //     }
    // }
    // });


// Carousel slide
// Function to add the animation classes
function addSlideAnimations(activeSlide) {
    const h2 = activeSlide.querySelector('h2');
    const p = activeSlide.querySelector('p');
    const a = activeSlide.querySelector('a');
  
    // Add animations
    if (h2) h2.classList.add('slide-in-top');
    if (p) p.classList.add('slide-in-left');
    if (a) a.classList.add('slide-in-right');
}
  
  // Function to remove the animation classes
function removeSlideAnimations(slide) {
    const h2 = slide.querySelector('h2');
    const p = slide.querySelector('p');
    const a = slide.querySelector('a');
  
    // Remove animations to reset
    if (h2) h2.classList.remove('slide-in-top');
    if (p) p.classList.remove('slide-in-left');
    if (a) a.classList.remove('slide-in-right');
}
  
  // Trigger animations on page load for the first slide
window.addEventListener('load', () => {
    const activeSlide = document.querySelector('.carousel-item.active');
    addSlideAnimations(activeSlide);
});
  
  // Trigger animations when the carousel slides to a new item
document.getElementById('carouselExampleAutoplaying').addEventListener('slide.bs.carousel', function (event) {
    // Remove animations from the previous slide
    const prevSlide = event.from;
    const prevSlideElement = document.querySelectorAll('.carousel-item')[prevSlide];
    removeSlideAnimations(prevSlideElement);
  
    // Add animations to the new slide
    const activeSlide = event.relatedTarget;
    addSlideAnimations(activeSlide);
});
  


// Swiper carousel
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// Initial check
updateSlidesPerView();

// Event listener to update on resize
window.addEventListener('resize', updateSlidesPerView);
function updateSlidesPerView() {
  var screenWidth = window.innerWidth;

  if (screenWidth <= 400) {  // Mobile phones (iPhone 6/7/8, SE, X, etc.)
      swiper.params.slidesPerView = 1;
  } else if (screenWidth > 400 && screenWidth <= 600) {  // Larger mobile screens (iPhone 11 Pro Max, etc.)
      swiper.params.slidesPerView = 1;
  } else if (screenWidth > 600 && screenWidth <= 768) {  // Tablets (iPad Mini portrait, etc.)
      swiper.params.slidesPerView = 2;
  } else if (screenWidth > 768 && screenWidth <= 1024) {  // Tablets and iPads (iPad portrait, etc.)
      swiper.params.slidesPerView = 2.5;
  } else if (screenWidth > 1024 && screenWidth <= 1200) {  // Larger tablets and iPads (iPad Pro, etc.)
      swiper.params.slidesPerView = 3;
  } else {  // Desktops
      swiper.params.slidesPerView = 4;
  }
  
  swiper.update();
}

// Last section image slide show infinite swiper
let slideshow = document.querySelector('.slideshow');
let images = document.querySelectorAll('.slideshow img');

let index = 0;
const totalImages = images.length;

function nextSlide() {
    index++;
    if (index >= totalImages) {
        index = 0; // Loop back to the first image
    }
    slideshow.style.transform = `translateX(${-index * 100}%)`;
}

// Optional: Add swiping functionality for touchscreens
let startX = 0;
slideshow.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

slideshow.addEventListener('touchmove', (e) => {
    let touch = e.touches[0];
    let moveX = touch.clientX - startX;

    // Simple swipe detection, move the slideshow by touch
    if (moveX > 50) {
        // Swipe right
        index--;
        if (index < 0) {
            index = totalImages - 1;
        }
        slideshow.style.transform = `translateX(${-index * 100}%)`;
    } else if (moveX < -50) {
        // Swipe left
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        slideshow.style.transform = `translateX(${-index * 100}%)`;
    }
});
