var chat = window.open("https://www.livecoding.tv/pkshetlie/chat","chat");
function sayMyName(event){
	var myevt = event;
	setTimeout(function(){
	myevt.source.postMessage(document.getElementById("currently-playing-title").innerHTML+
		" - "+document.getElementById("player-artist").innerHTML,myevt.origin);
	},3000)

}
function receiveMessage(event)
{
  	if (event.origin !== "https://www.livecoding.tv")
    	return;
    switch(event.data){
    	case "next":
			document.getElementById("player-bar-forward").click();
			sayMyName(event);
    	break;
		case "prev":
			document.getElementById("player-bar-rewind").click();
			document.getElementById("player-bar-rewind").click();
			sayMyName(event);
    	break;
		
    }
}
window.addEventListener("message", receiveMessage, false);
