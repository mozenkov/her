/**
 * Created by mozenkov on 12.03.17.
 */
//////
function setData() {
    var key = document.getElementById("key").value;
    var value = document.getElementById("value").value;

    var current = sessionStorage.getItem(key);
    if(current){
        current+=" " + value;
    }else{
        current=value;
    }

    sessionStorage.setItem(key,current);

    current = getCookie(key);
    if (current){
        current+=" " + value;
    }else{
        current=value;
    }
    setCookie(key, current);
}
////////////
function getData() {
    try{
        var key = document.getElementById("key").value;
        var session = document.getElementById("sessionstr");
        var cookie = document.getElementById("cookiestr");

        session.innerHTML = cookie.innerHTML = "";

        var value = sessionStorage.getItem(key) || "";
        if(value)
            session.innerHTML="<p>" + value + "</p>";

        value = getCookie(key) || "";
        if(value)
            cookie.innerHTML="<p>" + value + "</p>";
    } catch(e) {
        console(e);
    }
}
//////
function removeData() {
    var key = document.getElementById("key").value;

    sessionStorage.removeItem(key);

    eraseCookie(key);
}
