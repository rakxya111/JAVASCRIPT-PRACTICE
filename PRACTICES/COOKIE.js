function createCookie(name,value,days)
{
    let date1 = new Date();
    if(days)
    {
        date1.setTime(date1.getTime() + (days * 24 * 60 * 60 * 1000));
    }
    else
    {
        var expires = "";
        document.cookie = name + "=" + value + expires + ";path=/";
    }
}

createCookie("Rakshya","whatt","365");

function getCookie(c_name)
{
    if(document.cookie.length>0)
    {
        c_start = document.cookie.indexOf(c_name + "=");
        if(c_start!=-1)
        {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";",c_start);

            if(c_end == -1)
            {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
        return "";
    }
}


function setCookie()
{
    var name = "cookieName";
    var value = "Rakshya Bhuju";
    var ed = new Date();
    ed.setDate(ed.getDate + 2);
    document.cookie = name + "=" + value + "; expires = " + ed.toGMTString() + ";path=/";
    alert("Cookie Set");
}

function getCookie()
{
    var len = document.cookie.length;
    var ind = document.cookie.indexOf("cookieName=");
    if(ind == -1)
    {
        alert("Cookie Not FOund");
    }
    else
    {
        var name = document.cookie.substring(ind + 11,len);
        alert("Welcome :" + name);
    }

}