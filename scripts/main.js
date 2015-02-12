

var Chattest={};


Chattest.Append = function(){
	$('button').on('click', function(){
		var chatmessage = $(this).siblings('input').val();
		if ($(this).hasClass('Marcus')){
			$('#chat-window').append('<div class= "chat-message">'+'<p class = "user">' + "Marcus:" +'</p>' + " " + '<p class = "note">' + chatmessage + '</p>' +'</div>');
		}
		else{
			$('#chat-window').append('<div class= "chat-message">'+'<p class = "user">' + "User1:" +'</p>' + " " + '<p class = "note">' + chatmessage + '</p>' +'</div>');
		}
		$('input').val('');				
	})	
}




Chattest.Keyup= function(){
		$('input').keyup(function(event){
		if (event.keyCode == 13){
			event.preventDefault();
			var chatmessage = $(this).val();
			if ($(this).hasClass('marcus')){
				$('#chat-window').append('<div class= "chat-message">'+'<p class = "user">' + "Marcus:" +'</p>' + " " + '<p class = "note">' + chatmessage + '</p>' +'</div>');
			}
			else{
				$('#chat-window').append('<div class= "chat-message">'+'<p class = "user">' + "User1:" +'</p>' + " " + '<p class = "note">' + chatmessage + '</p>' +'</div>');
			}
			$('input').val('');				
		}	
	})
}



$(document).ready(function(){
	Chattest.Append();
	Chattest.Keyup();

	
});



