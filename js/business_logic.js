$(document).ready(function() {
	var $sigdiv = $("#signature").jSignature({color:"#145394"})
	
	$('<input type="button" name="rerender" value="Rerender Sig Red">').bind('click', function(e){
		var data = $sigdiv.jSignature('getData')
			, settings = $sigdiv.jSignature('clear').children('canvas.jSignature').data('jSignature.settings')
		settings.color = 'red'
		$sigdiv.jSignature('setData', data)
	}).appendTo($sigdiv);
})

function importImg(sig)
{
	sig.children("img.imported").remove();
	$("<img class='imported'></img").attr("src",sig.jSignature('getData')).appendTo(sig);
}
