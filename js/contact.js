$(document).ready(function(){

	$('#send-contact').validate();
});


function validar_contato()
{
	
	alert('Entrou aqui primeiro');
	if($('#send-contact').valid()){
       return true;
    } else {
        $('#send-contact').focusInvalid();
        return false;
    }
}

function enviar_contato()
{

	if(validar_contato()){

		var url = $("#send-contact").attr("action");
		var form = $("#send-contact").serialize();

		$.ajax({
	        type: 'post',
	        url: url,
	        data: form,
	        dataType: 'html',
	        beforeSend: validar_contato,
	        error: function(resp){alert(resp);},
	        success: function(resp){
	        	alert(resp);
	        }
	    });
	}
}