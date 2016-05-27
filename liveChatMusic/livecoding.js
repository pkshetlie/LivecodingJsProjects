var textarea = $('#message-textarea');
var submit = $('input[type="submit"]');
function postMessage(message) {
    $("textarea").val(message);
    submit.trigger('click');
}

  $(".message").addClass("read");
  setInterval(function(){
  	$(".message:not(.read)").each(function(){
  		$(this).addClass("read");
  		var text = $(this).text();
  		// if(text != undefined){
	  	// 	if(text.indexOf(' joined the room.') != -1) {
	   //          var userJoined = text.slice(0, text.indexOf(' joined the room.'));
	   //          postMessage("Bonsoir " + userJoined + " bienvenue sur mon stream! "+
    //             "Des commandes sont disponibles pour la musique : "+"/next et /prev");
    //     	}   
    // 	}
  		switch($(this).children("a")[0].nextSibling.nodeValue ){
  			case "/next":
  			  opener.postMessage("next","https://play.google.com");
  			break;
  			case "/prev":
  			  	opener.postMessage("prev","https://play.google.com");
  			break;
  		}
  		
  	});
  },1000)


  function receiveMessage(event)
{
    if (event.origin !== "https://play.google.com")
      return;
    
    postMessage("Musique changée pour : "+ event.data);
}

window.addEventListener("message", receiveMessage, false);alert("Chargé !");
