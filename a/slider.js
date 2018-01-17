(function ($){
	$.fn.slider = function(opts){
		default_opts = {
			counts:4,
			display_number:3,
			node:"p",
		};
		options = $.extend(default_opts,opts);
		var thi = $(this);
		function prenex(){
			var pre = "<a class='pre'>pre</a>";
			var next = "<a class='next'>next</a>";
			thi.prepend(pre)
			thi.append(next)
		}prenex()
		function getele(){
			//所有元素不显示
			thi.children('p').attr('class','none')
			//显示act类元素
			for(var i=1;i<=options.display_number;i++){
				thi.children('p').eq(i-1).attr('class','act')		
			}
		}getele()	

		function updown(){
			$('.pre').click(function(){			
				$(".wrap p:first").before($(".wrap p:last"))
				$(".wrap p:first").attr('class','act')
				$('.wrap .act:last').attr('class','none')
			})
			$('.next').click(function(){
				$(".wrap p:last").after($(".wrap p:first"))
				$(".wrap p:last").attr('class','none')
				$('.wrap .none:first').attr('class','act')
			})
		}updown()
	}

	
})(jQuery)