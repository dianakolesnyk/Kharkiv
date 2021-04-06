function myFunction1() {
    if (document.getElementById("text1") != null) {
      setTimeout(function() {
        document.getElementById('text1').style.display = 'block';
      }, 500);
    }
  }
  
function myFunction2() {
    if (document.getElementById("text2") != null) {
      setTimeout(function() {
        document.getElementById('text2').style.display = 'block';
      }, 1000);
    }
  }

  function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "/css/style.css") {
      theme.href = "/css/styleNight.css";
    } else {
      theme.href = "/css/style.css";
    }
  }
