
//BACK TO TOP
    
google.load('jquery', '1.6.4'); 
google.setOnLoadCallback(function() { 
}); 


jQuery(document).ready(function() {
var offset = 250; //when the button appears 
var duration = 300; //duration - how long it takes to appear

//The scroll function allows the button to be visible. The scrollTop function is what we’ve used for the current scroll position. Anything over 250 will show the button with the fadeIn function. When this position is greater than the offset, the button appears.
jQuery(window).scroll(function() { 
if (jQuery(this).scrollTop() > offset) {
jQuery(".back-to-top").fadeIn(duration); 
} else {
jQuery(".back-to-top").fadeOut(duration); 
} 
});
 
 
jQuery(".back-to-top").click(function(event) {
event.preventDefault();
jQuery("html, body").animate({scrollTop: 0}, duration);
return false;
})
    
})