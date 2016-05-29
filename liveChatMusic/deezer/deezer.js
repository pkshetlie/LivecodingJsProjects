var chat = window.open("https://www.livecoding.tv/pkshetlie/chat","chat");
function sayMyName(event){
	var myevt = event;
	setTimeout(function(){
	myevt.source.postMessage(
		$("#player [data-href^='/album/']").text()+
		" - "+$("#player [data-href^='/artist/']").text(),myevt.origin);
	},3000)

}
function receiveMessage(event)
{
  	
    switch(event.data){
    	case "next":
    	$("#player [data-action='nextSong']").click();
			sayMyName(event);
    	break;
		case "prev":
    		$("#player [data-action='prevSong']").click();
			sayMyName(event);
    	break;
    }
}
window.addEventListener("message", receiveMessage, false);
