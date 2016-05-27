var textarea = $('#message-textarea');
var submit = $('input[type="submit"]');

var everyOneCan = true;


function postMessage(message) {
    $("textarea").val(message);
    submit.trigger('click');
}

$(".message").addClass("read");
  setInterval(function() {
    $(".message:not(.read)").each(function() {

        if($(this).children("a").is(".role-moderator")){
          /// command speciales pour moderateurs
          switch ($(this).children("a")[0].nextSibling.nodeValue) {
              case "/onlyStaff":
                  everyOneCan = !everyOneCan;
                  if(everyOneCan){
                    postMessage("sys: tout le monde peut agir");
                  }else{
                    postMessage("sys: seuls les admin peuvent agir");
                  }
                  break;
          }
        }
        $(this).addClass("read");
        if(everyOneCan || $(this).children("a").is(".role-moderator")){
          switch ($(this).children("a")[0].nextSibling.nodeValue) {
              case "/next":
                  opener.postMessage("next", "https://play.google.com");
                  break;
              case "/prev":
                  opener.postMessage("prev", "https://play.google.com");
                  break;             
          }
        }
    });
}, 1000);

function receiveMessage(event) {
    if (event.origin !== "https://play.google.com")
        return;

    postMessage("Musique changée pour : " + event.data);
}

window.addEventListener("message", receiveMessage, false);
alert("Chargé !");