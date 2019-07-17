

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the answer */
    this.classList.toggle("active");
    
    /* Toggle between hiding and showing the active answer */
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight){
        answer.style.maxHeight = null;
        answer.style.display = "none";
    } else {
        answer.style.maxHeight = 100 + "%";
        answer.style.display = "block";
    } 
  });
}
