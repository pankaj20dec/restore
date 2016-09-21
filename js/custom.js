var wheight,restore,Width;
	restore = {
		sizes: function(){
			wheight = $(window).height();
			wWidth = $(window).width();
			$('.wheight').css({'height': wheight});
			var hWidth = $('#header').outerWidth();
			var offset = $('#header').offset();
		
			$('.banner-width').css({'width': hWidth + offset.left - 100});
			
			var sliderWidth = $('.owl-item').outerWidth();
			$('.slider-margin-left').css({'marginLeft': sliderWidth/2});
			$('.slider-margin-right').css({'marginRight': sliderWidth/2});
		},
		accordion: function(){
			$('.question-answer h4').click(function(){
				if($(this).parent().find('.answer').hasClass('active')){
					$(this).parent().find('.answer').removeClass('active').slideUp(500);
					$(this).find('.plus').removeClass('minus');
				}else{
					$('.question-answer h4').parent().find('.answer').removeClass('active').slideUp(500);
					$('.question-answer h4').find('.plus').removeClass('minus');
					$(this).parent().find('.answer').addClass('active').slideDown(500);
					$(this).find('.plus').addClass('minus');
				}
			});
		},feeds: function(){
			userFeed = new Instafeed({
			 get: 'user',
			 limit:30,
			 userId: '2285661877',
			 accessToken: '2285661877.0fe4f3d.bf0b644e3e494bd5b0bf4ccc8ebac9d2',
			 resolution: 'low_resolution',
			 after: function () {
			  var owl = $("#instafeed");
			  owl.owlCarousel({ 
			  loop: true,
			  dots: false,
			  margin: 30,
			  responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:3
					},
					1000:{
						items: 6
					}
				}

			  });
			  // Custom Navigation Events
			 $(".next").click(function(){
				owl.trigger('next.owl.carousel');
			  })
			  $(".prev").click(function(){
				owl.trigger('prev.owl.carousel');
			  })
			 },
			 template: '<div class="item"><a href="{{link}}" target="_blank"><span><img src="{{image}}" alt="{{caption}}"/></span></a></div>', 
			});
			userFeed.run();
		},carousel: function(sliderContainer){
			var sliderContainer;
			 var contentSlider = $(sliderContainer).owlCarousel({
				loop:true,
				center:true,
				margin: 160,
				URLhashListener:true,
				autoplayHoverPause:true,
				startPosition: 'URLHash',
				dots: false,
				autoplay: false,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:2,
						margin: 120,
					},
					1000:{
						items: 2
					}
				}
			});
			  // Custom Navigation Events
			 $(".slider-next").click(function(){
				contentSlider.trigger('next.owl.carousel');
			  })
			  $(".slider-prev").click(function(){
				contentSlider.trigger('prev.owl.carousel');
			  })
			
		},slider: function(sliderContainer,pager){
			var sliderContainer,pager;
			$(sliderContainer).bxSlider({
				pager: pager
			});
		} 
		
	}
	$(document).ready(function(){
		restore.sizes();
		restore.accordion();
		if($("#instafeed").length){
			restore.feeds();
		}
		
		if( $('.content-slider .content-box').length > 1){
			restore.carousel('.content-slider');
		}
		if( $('.testimonial-slider .content-box').length > 1){
			restore.carousel('.testimonial-slider');
		}
		if($('.blog-slider li').length > 1){
			restore.slider('.blog-slider',false);
		}
		var mainHeight = $('.main-container').height();
		var oneThird = mainHeight/3;
		$('.right-blackbar').css({'top': oneThird + 100 +'px'});
		$('.left-blackbar').css({'top': oneThird - 100 +'px'});
	});
	$(window).on("load",function(e){
		restore.sizes();
		
	});
	$(window).resize(function(){
		restore.sizes();
		
	});

