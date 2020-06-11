function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }

// function change(id) {
//     var elem = document.getElementById(id);
//     if (elem.innerHTML=="<i class='fas fa-plus'></i> Read more") elem.innerHTML = "<i class='fas fa-minus'></i> Read less";
//     else elem.innerHTML = "<i class='fas fa-plus'></i> Read more";
// }

function change(id) {
    var elem = document.getElementById(id);
    if (elem.innerHTML.includes("more")) elem.innerHTML = "<i class='fas fa-minus'></i> Read less";
    else elem.innerHTML = "<i class='fas fa-plus'></i> Read more";
}

