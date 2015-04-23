	
	$('.cover:first').addClass('first-child');
	$('.cover:last').addClass('last-child');
	$(".next, .prev").on("click", function(e) {
	    vertNav($(this));
	});

	function vertNav(clicked) {
		
		// the container that will be scrolled to
		var target = '.cover';
	    container = $(clicked).parent();

	    // am I the last .container in my group?
	    while (document != container[0] && container.find('~'+target, '~:has('+target+')').length == 0)
	        container = container.parent(); // if so, search siblings of parent instead
	
	    prevdiv = container.prevAll(target, ':has('+target+')').first();
	    nextdiv = container.nextAll(target, ':has('+target+')').first();
	    
	    // if clicked next object
	    if ( $(clicked).hasClass('next') ) {
	    	// no next .container found, go back to first container
	    	if (nextdiv.length==0) nextdiv = $(document).find(target+':first');
	    
	    	//$(document).scrollTop(nextdiv.offset().top);
	    	$('html').animate({scrollTop:nextdiv.offset().top},300);	    
	    }
	
		// if clicked prev
	    if ( $(clicked).hasClass('prev') ) {
	    	// no next .container found, go back to first container

	
	    	// scroll to previous element
	    	prevdiv = $(clicked).parents('.cover').prev('.cover');
	    	
	    	// if is first element on page, then scroll to last element
	    	if ( $(clicked).parents('.cover').hasClass('first-child') ) {
		    	prevdiv =  $(document).find(target+':last');
	    	};    	
	    	
	    	//$(document).scrollTop(nextdiv.offset().top);
	    	$('html').animate({scrollTop:prevdiv.offset().top},300);	    
	    }
	    
	    // $(this).parent().next() // this is the next div container.
	    return false;
	}	
