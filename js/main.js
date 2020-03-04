
function myFunction(x) {  
  x.classList.toggle("change");
  myFunction2();
}
function myFunction2() {
  var y = document.getElementById('list');
  if (y.className == 'showNav') {
    y.className = "hideNav";
  } else {
    y.className = "showNav";
  }
  
}