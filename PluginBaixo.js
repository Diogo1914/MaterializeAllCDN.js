window.onload = function aaaaaaa () {
//initiate floating button
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.fixed-action-btn'); 
 var instances = M.FloatingActionButton.init(elems,{direction :"left"});
    });  
 //initiate sidenav   
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('.sidenav');   
    var instances = M.Sidenav.init(elems);
   }); 
 //initiate carousel  
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.carousel'); 
   var options = {
       indicators :true
   }
   var instances = M.Carousel.init(elems,options); });
 //initiate carousel slider
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.carousel.carousel-slider'); 
   var instances = M.Carousel.init(elems,{fullWidth:true,indicators:true}); });   
 //initiate accordian
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.collapsible'); var instances = M.Collapsible.init(elems);});
 //initiate deopdown 
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.dropdown-trigger'); var instances = M.Dropdown.init(elems); });  
 //initiate modal
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.modal'); var instances = M.Modal.init(elems); }); 
//initiate parallex
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.parallax'); var instances = M.Parallax.init(elems,{responsiveThreshold:10}); });
 //initiate media
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.materialboxed'); var instances = M.Materialbox.init(elems); });
 //initiate slider
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.slider'); var instances = M.Slider.init(elems); }); 
 //initiate scrollspy
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.scrollspy'); var instances = M.ScrollSpy.init(elems); });
 //initiate tabs
 var elems  = document.querySelectorAll('.tabs');
var instance = M.Tabs.init(elems);
 //initiate pushin
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.pushpin'); var instances = M.Pushpin.init(elems); });
 //initiate tooltip
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.tooltipped'); var instances = M.Tooltip.init(elems); });
//initiate form autocomplte
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.autocomplete'); var instances = M.Autocomplete.init(elems); });
//initiate chips
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.chips'); var instances = M.Chips.init(elems); });
//initiate form datepicker
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.datepicker'); var instances = M.Datepicker.init(elems); }); 
//initiate form timepicker
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.timepicker'); var instances = M.Timepicker.init(elems); }); 
//initialize  select of input
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('select'); 
var instances = M.FormSelect.init(elems); });
// initiation character counting for userid
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('input#input_text'); var instances = M.CharacterCounter.init(elems);});
//char count for textarea
document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('textarea#textarea2'); var instances = M.CharacterCounter.init(elems);});
}