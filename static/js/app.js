//Function to hide search until user starts typing//
$(function() {
  $('#myInput').keyup(function() {
    if ($(this).val().length == 0) {
      $('#myUL').hide();
    } else {
      $('#myUL').show();
    }
  }).keyup();
});
//Function for search box to filter as user inputs
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
};
//Function to change info on click//
$("li").on("click" , "a" , function(){
  const d = data;
  //Change logo, strain, Grow, Sativa, THC, CBD, info, and more_info on user selection of search drop
  for (let value of d.values()) {
    var logo, strain, Grow, Sativa, Indica, Hybrid, THC, CBD, info, more_info, Index;
    
    logo = value.logo;
    strain = value.strain;
    Grow = value.Grow;
    Sativa = value.Sativa;
    Indica = value.Indica;
    Hybrid = value.Hybrid;
    THC = value.THC;
    CBD = value.CBD;
    info = value.info;
    more_info = value.more_info;
    Index = this.id;
    
    $("#image").attr("src" , d[Index].logo).show();
    $("#strain").text(d[Index].strain);
    $("#Grow").text(d[Index].Grow+' weeks of flowering');
    $("#Sativa").text(d[Index].Sativa);
    $("#Indica").text(d[Index].Indica);
    $("#Hybrid").text(d[Index].Hybrid);
    $("#THC").text('THC: '+d[Index].THC+'%');
    $("#CBD").text('CBD: '+d[Index].CBD+'%');
    $("#info").text(d[Index].info);
    $("#more_info").text(d[Index].more_info);
    document.getElementById("myInput").value = "";
    document.getElementById("myUL").style.display = "none";
  }
});
//Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon//
function navFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}