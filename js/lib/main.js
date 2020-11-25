jQuery(function($) {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 200) {
            $('.navbar').addClass('fixed-top');
        } else if ($(this).scrollTop() == 0) {
            $('.navbar').removeClass('fixed-top');
        }
    });

});

const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

var heroContent = [
  ['cow-landscape.jpg', 'Brandon Downs, Mason Flat' ],
  ['hurunui-inland.jpg', 'Island Hills, Culverden'],
  ['waipara-coastal.jpg', 'Glenafric, Waipara']
]

function setRandomImageAndLabel() {
    var randomInt = Math.floor(Math.random() * heroContent.length)
    var target = document.getElementById('slider-image')
    target.setAttribute("style", "background-image:url(images/" + heroContent[randomInt][0] + ");")
    var label = document.getElementById('bottom-right-label')
    label.innerHTML = heroContent[randomInt][1]
}

function setYear() {
    var date = new Date()
    document.getElementById('year').innerHTML = $date.getFullYear
}

$(document).ready(function () {
  setRandomImageAndLabel()
    setYear()
})
