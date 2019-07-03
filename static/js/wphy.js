jQuery(document).ready(function($) { 
$('.header-menu-con').slicknav({
		
		label: '',
	prependTo:'.mini'
});

  var swiper = new Swiper('#slider .swiper-container', {
        pagination: '#slider .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		loop: true,
		autoplay: 5000,
    });
	  var swiper = new Swiper('.cp-img  .swiper-container', {
        pagination: '.cp-img  .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		loop: true,
		autoplay: 5000,
    });
  var swiper = new Swiper('.cp-hot .swiper-container', {
        pagination: '.cp-hot .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		loop: true,
		autoplay: 5000,
slidesPerView : 2,
spaceBetween : 20,
    });  
	 var swiper = new Swiper('.case .swiper-container', {
        pagination: '.case .swiper-pagination',
        paginationClickable: true,
        nextButton: '.icon-arrows-right',
        prevButton: '.icon-arrows-left',
		loop: true,
		autoplay: 5000,
slidesPerView : 4,
spaceBetween : 20,
    });  
    $(function() {
        $("img").lazyload({
            effect:"fadeIn"
          });
        });
	$(function(){
	$(window).scroll(function(){
	if($(window).scrollTop()>120){
	$("#side-bar .gotop").fadeIn();
	}
	else{
	$("#side-bar .gotop").fadeOut();
	}
	});
	$("#side-bar .gotop").click(function(){
	$('html,body').animate({'scrollTop':0},500);
	});
	});
	$(function(){
		$(".dh").hover(function(){
		$(".hied_con").css("display","block");
		},function(){
    $(".hied_con").css("display","none");
	});
		
	});
	$(".sub-menu").prepend('<span class="arr_t"></span>'); 
	$('.header-menu-con li').hover(function() {
           
			  $(this).find('ul').show();
        },
        function() {
			$(this).find('ul').hide();
        });
});

