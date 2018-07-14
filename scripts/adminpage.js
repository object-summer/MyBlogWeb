$(document).ready(function(){
	$("#addKillBtn").on('click',function(){
		var skillList=$('#addKill').val();
		$('.addKillCont').append("<option>"+skillList+"</option>");
		$('input#addKill').val('');
	})
	
})
