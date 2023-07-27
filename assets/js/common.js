// add toggle functionality to abstract and bibtex buttons
$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
        $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
        $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
    });
    $('a').removeClass('waves-effect waves-light');
});

// new abstract toggle
$(document).ready(function() {
    $(".slidingDiv").hide();
  
    $('.show_hide').click(function(e) {
      var $this = $(this);
      $this.closest(".entry").find(".slidingDiv").slideToggle(2);
      var val = $(this).text() == "Abstract ×" ? "Abstract +" : "Abstract ×";
      $(this).hide().text(val).fadeIn(2);
      e.preventDefault();
    });
});

// bootstrap-toc
$(document).ready(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});

// Research nav highlight
function setActive(i) {
    $('.nav-item').removeClass('active');
    $('#'+i).addClass("active");
}
$('.res-nav').on('click',function(){

    //Remove any previous active classes
    $('.nav-item').removeClass('active');
  
    //Add active class to the clicked item
    $(this).addClass('active');
});
var waypoint = new Waypoint({
    element: document.getElementById('res-nav-down'),
    handler: function(direction) {
      setActive('res-nav-'+direction);
    },
    offset: '-5%'
});
var waypoint = new Waypoint({
    element: document.getElementById('res-nav-down'),
    handler: function() {
      setActive('res-nav-down');
    },
    offset: '-5%'
});
