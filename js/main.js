$( document ).ready(function() {
    
    $('#home-banner').slick({
    	dots: true,
    	arrows:true,
		speed: 300,
		slidesToShow: 1,
		prevArrow: '<div class="slick-prev"><img src="images/left.svg"></div>',
    	nextArrow: '<div class="slick-next"><img src="images/right.svg"></div>'
    });

   $(".hamburger").click(function () {
  	 $(".hamburger").toggleClass("active");
    });	
   	
   	$(".hamburger").click(function(){
	  $("header nav .width70").slideToggle();
	});

	$('a#filter-a').click(function(){
       $(".work-one").addClass('filter-hide');
       $(".work-one[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter-hide");    
       $('a#filter-a').removeClass('active');
       $(this).addClass('active');
       return false;
      });
     $('a[data-filter="*"]').click(function(event) {    
        $(".work-one").removeClass('filter-hide');
        return false;
     });	


      $(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {   
	        $('.scroll-top').fadeIn(200);   
	    } else {
	        $('.scroll-top').fadeOut(200); 
	    }
	});
	$('.scroll-top').click(function() {     
	    $('body,html').animate({
	        scrollTop : 0                     
	    }, 500);
	});
	    
});



