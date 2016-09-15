var wheight,smoke;
	smoke = {
		sizes: function(){
			wheight = $(window).height();
			$('.wheight').css({'height': wheight});
			var hWidth = $('#header').outerWidth();
			var offset = $('#header').offset();
			$('.banner-width').css({'width': hWidth + offset.left - 100})
		},
		accordion: function(){
			$('.question-answer h6').click(function(){
				if($(this).parent().find('.answer').hasClass('active')){
					$(this).parent().find('.answer').removeClass('active').slideUp(500);
					$(this).find('.down-arrow').removeClass('up-arrow');
				}else{
					$('.question-answer h6').parent().find('.answer').removeClass('active').slideUp(500);
					$('.question-answer h6').find('.down-arrow').removeClass('up-arrow');
					$(this).parent().find('.answer').addClass('active').slideDown(500);
					$(this).find('.down-arrow').addClass('up-arrow');
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
				margin: 120,
				URLhashListener:true,
				autoplayHoverPause:true,
				startPosition: 'URLHash',
				dots: true,
				autoplay: true,
				responsive:{
					0:{
						items:1
					},
					480:{
						items:2
					},
					768:{
						items:2
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
			
		} 
		
	}
	$(document).ready(function(){
		smoke.sizes();
		smoke.accordion();
		if($('.gallery-page').length){
			$(".gallery-ul a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:400, autoplay_slideshow: false});
		}
		if($("#instafeed").length){
			smoke.feeds();
		}
		var sliderWidth = $('.content-box').outerWidth();
			console.log(sliderWidth + 100);
			$('.slider-margin').css({'marginLeft': sliderWidth/2})
		
	});
	$(window).on("load resize",function(e){
		smoke.sizes();
		var sliderWidth = $('.content-box').outerWidth();
			console.log(sliderWidth + 100);
			$('.slider-margin').css({'marginLeft': sliderWidth/2})
		
		if( $('.content-slider .content-box').length > 1){
			smoke.carousel('.content-slider');
		}
	});

