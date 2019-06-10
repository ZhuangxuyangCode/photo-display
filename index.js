var wrap = $('.wrapper');

setTimeout(function(){
	wrap.removeClass('init');
}, 200);

// class="active": width(16% -> 100%), :not(.active) width->0% height->0%
$('li').on('click', function(){
	$(this).addClass('active');
	wrap.addClass('wrap-active');
});

$('.close').on('click', function(e){
	//阻止事件冒泡: 使事件只在li上触发，不会冒泡至ul
	e.stopPropagation();
	$('.active').removeClass('active');
	wrap.removeClass('wrap-active');
})