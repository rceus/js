var getMaxHeight=function($elems){
	var maxHeight=0;
	$elems.each(function(){
		//In some cases you may want to use outerHeight()
		var height = $(this).height();
		if(height > maxHeight){
			maxHeight=height;
		}
	});
	return maxHeight;
}

//Usage: $(elements).height(getMaxHeight($(elements)));
//You can replace all occurrences of height to width