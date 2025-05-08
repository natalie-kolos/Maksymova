$('.testimonials-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $(document).ready(function(){
    $('.carousel-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev">←</button>',
        nextArrow: '<button type="button" class="slick-next">→</button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    Fancybox.bind("[data-fancybox='gallery']", {});
});

function animateNumbers(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          let target = entry.target;
          let finalNumber = parseInt(target.getAttribute("data-target"));
          let suffix = target.getAttribute("data-suffix") || "";
          let count = 0;
          let speed = Math.ceil(finalNumber / 100);

          let updateNumber = () => {
              count += speed;
              if (count > finalNumber) {
                  count = finalNumber;
                  clearInterval(interval);
              }
              target.textContent = count + suffix;
          };

          let interval = setInterval(updateNumber, 20);
          observer.unobserve(target);
      }
  });
}

let observer = new IntersectionObserver(animateNumbers, { threshold: 0.5 });
document.querySelectorAll(".stats").forEach(stat => observer.observe(stat));