(function ($){
	$.fn.addnode = function(opts){
		default_opts = {
			html:"内容",
			node:"p",
			count:2,
			block:true,
		}
		options = $.extend(default_opts,opts);
		elestart = "<" + options.node + ">";
		eleend = "</" + options.node + ">"
		return this.each(function(){
			for(var i=0;i<options.count;i++){
				$(this).append(elestart + options.html + eleend)
			}
			if(options.block){
				$(this).children().css({'display':'block'})
			}
		})
	}
	$.fn.changecolor = function(opts){
		default_opts = {
			color:'black',
		}
		options = $.extend(default_opts,opts)
		return this.each(function(){
			$(this).children().css({'color':options.color})
		})
	}
	
})(jQuery)