var jso = new JSO({
    providerID: "youtube",
    client_id: "970708493348-emtk6b0nucmms5rlp6g5sis39tbp9ffb.apps.googleusercontent.com",
    redirect_URI: "https://github.com/Adlbert/SyncStreaming/blob/master/Projects/Chrome%20Extension/SyncStreaming/SyncStreaming.html",
    authorization: "https://accounts.google.com/o/oauth2/auth",
    scopes: { request: ["https://www.googleapis.com/auth/youtube"]}
});

function callback(){
  jso.callback();
}

function getToken(){
  jso.callback();
  jso.getToken(function(token) {

    console.log("I got the token: ", token);

  });
}

function logout(){
  jso.wipeTokens();
}
