$(function()
{

	/* Menu Options */
	var menuPosition = $.cookie('menuPosition') ? $.cookie('menuPosition') : 'left-menu';

	if (menuPosition == 'right-menu' && !$('.container-fluid:first').is('.right-menu'))
		$('.container-fluid:first').addClass('right-menu');

	if (menuPosition == 'right-menu' && $('.container-fluid:first').is('.left-menu'))
		$('.container-fluid:first').removeClass('left-menu');

	$('#footer [data-toggle="menuPosition"]').not('[data-menuPosition="'+menuPosition+'"]').parent().removeClass('active');
	$('#footer [data-toggle="menuPosition"][data-menuPosition="'+menuPosition+'"]').parent().addClass('active');

	$('#footer [data-toggle="menuPosition"]').click(function()
	{
		if ($(this).parent().is('.active'))
			return;

		$('#footer [data-toggle="menuPosition"]').not(this).parent().removeClass('active');
		$(this).parent().addClass('active');

		if ($(this).attr('data-menuPosition') == 'right-menu')
			$('.container-fluid:first').addClass('right-menu');

		if ($(this).attr('data-menuPosition') == 'right-menu' && $('.container-fluid:first').is('.left-menu'))
			$('.container-fluid:first').removeClass('left-menu');

		if ($(this).attr('data-menuPosition') == 'left-menu' && $('.container-fluid:first').is('.right-menu'))
			$('.container-fluid:first').removeClass('right-menu');

		$.cookie('menuPosition', $(this).attr('data-menuPosition'));
	});
});