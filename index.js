
function shout(string) {
    console.log(string.toUpperCase());
    return string.toUpperCase();
}
function whisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
    return string.toUpperCase();
}

logShout("Hello");


function logWhisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
}

logWhisper("Hello");

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()){
       return "I can't hear you!";
    } 
    if (string === string.toUpperCase()){
        return "YES INDEED!";
    }
    if (string === "Let's have dinner together!"){
        return "I would love to!";
    }
}



 

