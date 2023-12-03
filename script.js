function toggleAnswer(faqNumber) {
  var answerId = "answer" + faqNumber;
  var answer = document.getElementById(answerId);
  var arrowIcon = document.querySelector(
    ".faq-item:nth-child(" + faqNumber + ") .arrow-icon"
  );

  if (answer.style.display === "block") {
    answer.style.display = "none";
    arrowIcon.classList.remove("arrow-down");
  } else {
    answer.style.display = "block";
    arrowIcon.classList.add("arrow-down");
  }
}

var currentIndex = 0;
var testimonyInner = document.getElementById("testimonyInner");
var testimonyItems = document.querySelectorAll(".testimony-item");

function autoScroll() {
  currentIndex = (currentIndex + 1) % testimonyItems.length;
  var newPosition = -currentIndex * 100 + "%";
  testimonyInner.style.transform = "translateX(" + newPosition + ")";
}

setInterval(autoScroll, 3000);


function initMap() {

  var myLatLng = { lat: -11.397, lng: 12.644 };


  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 8,
  });


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Map!",
  });
}