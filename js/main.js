jQuery(document).ready(function($){
	$('.banner_img')
		.mouseover(function(e){
			var _this = this;
			$('.banner_img').each(function (index, value){ 
				$(this).removeClass('active');
				$(this).addClass('hidden');
			})
		
			$('.white_button').removeClass('active');
			
			$(_this).addClass('active');
			$(_this).removeClass('hidden');
		 	$('#special_text').text( $(_this).attr('sp-text') );
			$( '#' + $(_this).attr('sp-week') ).addClass('active');
		})
		.mouseout(function() {
    		$('.banner_img').each(function (index, value){ 
				$(this).removeClass('active');
				$(this).removeClass('hidden');
			})
			$('.white_button').removeClass('active');
			$('#special_text').text('');
  		})
	
	function clearPacks(_this){
		setTimeout(function(){
			if($(_this).hasClass('active')){
				$('.banner_img').each(function (index, value){ 
					$(this).removeClass('active');
					$(this).removeClass('hidden');
				})
				$('.white_button').removeClass('active');
				$('#special_text').text('');	
			}
		}, 5000);
	}
	
	setTimeout(function(){
		var _this = $('#img_2');
		
		$('.banner_img').each(function (index, value){ 
			$(this).removeClass('active');
			$(this).addClass('hidden');
		})
		$('.white_button').removeClass('active');
		$(_this).addClass('active');
		$(_this).removeClass('hidden');
		$('#special_text').text( $(_this).attr('sp-text') );
		$( '#' + $(_this).attr('sp-week') ).addClass('active');
		clearPacks(_this);
	}, 1500);
	
	setTimeout(function(){
		var _this = $('#img_1');
		
		$('.banner_img').each(function (index, value){ 
			$(this).removeClass('active');
			$(this).addClass('hidden');
		})
		$('.white_button').removeClass('active');
		$(_this).addClass('active');
		$(_this).removeClass('hidden');
		$('#special_text').text( $(_this).attr('sp-text') );
		$( '#' + $(_this).attr('sp-week') ).addClass('active');
		clearPacks(_this);
	}, 7000);
	
	setTimeout(function(){
		var _this = $('#img_3');
		
		$('.banner_img').each(function (index, value){ 
			$(this).removeClass('active');
			$(this).addClass('hidden');
		})
		$('.white_button').removeClass('active');
		$(_this).addClass('active');
		$(_this).removeClass('hidden');
		$('#special_text').text( $(_this).attr('sp-text') );
		$( '#' + $(_this).attr('sp-week') ).addClass('active');
		clearPacks(_this);
	}, 13000);
	
});