try{
    console.log(rakshya);
}
catch(error){
    console.log("Balle Balle");
}

try
{
    console.log("Try Block");
    throw new Error("An error Occured");
}
catch(error)
{
 console.log("Error.",error.message);
}
finally
{
    console.log("FInally Block");
}

function message()
{
    try{
        addAlert("Welcome guest!");//assuming addALert is a valid function
        alert("test");
    }
    catch(err)
    {
        txt = "There was an error on this page";
        txt+="Click Ok to continue visting the page";
        txt+="or cancel to return the home page";
        if(confirm(txt)){
            // Handle cancel action or perform any other necessary actions
           // For example, redirecting to another page
           // window.location.href = "http://www.w3schools.com/";
            console.log(err);
        }
    }
}

//Example 2:

function divideByZeroExample(){
  try{
        let num = 10;
        var den = 0;
        if(den == 0)
        {
            throw new error("Can't Divide by zero.");
        }
        let result = num/den;
        console.log("Result : ", result);
    }
    catch(error)
    {
        console.log("Error:" + error.message + "<br>");
    }
    finally
    {
        console.log("Finally block executed");
    }

}


window.onerror = exfoerr;
var text1 = "";
function exfoerr(msg,url,line){
    text1 = "Error Displayed\n\n";
    text1 += "Error:" + msg + "\n";
    text1 += "URL:" + url + "\n";
    text1 += "Line Number :" + line + "\n\n";
    text1 += "Click Ok to continue.\n\n";
    alert(text1);
    return true;
}

function display()
{
    addlert("click to Proceed!!!!");
}
