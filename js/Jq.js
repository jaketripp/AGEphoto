$(document).ready(function() {
  setBindings ();
});

function setBindings () {
  $("nav a").click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";
    // checking function for click event and id concatenation
    // alert("button id " + sectionID);

    $("html body").animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000);
  });
}
