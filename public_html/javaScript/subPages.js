$(document).ready(function() { 
   //Strona ladowana jako pierwsza:
   $('#Content').load('subPages/mainContent.html');
 
   //	Ladowanie pozostalych podstron:
   //	$('ul#menu li a').click(function() {
	$(' #TopBar a').click(function() {
		var podstrona = $(this).attr('href');
		$('#Content').html('Ładuję...');
		$('#Content').load('subPages/'+podstrona);
		return false;
	});   
	
	$(' #MainMenu ol li a').click(function() {
		var podstrona = $(this).attr('href');
		$('#Content').html('Ładuję...');
	    $('#Content').load('subPages/'+podstrona);		
					
	$(document).ready(function() {
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	});

	return false;	
	});   
});