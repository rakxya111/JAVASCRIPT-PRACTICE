function validate_numbers()
{
    let val = document.getElementById("elem").value;
    let patt = /^[0-9]+$/;
    if(val.match(patt))
    {
        alert("valid Entry");
    }
    else
    {
        alert("INVALID entry");
        document.getElementById('elem').value="";
        document.getElementById('elem').focus();
    }

}

function validate_letters()
{
    let val1 = document.getElementById("elem1").value;
    let patt2 = /^[a-zA-Z]+$/;
    if(val1.match(patt2))
    {
        alert("VALID ENTRY");
    }
    else
    {
        alert("INVALID entry"); 
        document.getElementById("elem1").value="";
    }
}

function validate_length()
{
    let val = document.getElementById('elem2').value;
    let min = 6;

    if(val.length==min)
    {
        alert("VALID ENTRYYYYY");
    }
    else
    {
        alert("USER ID must have at least 6 characters.");
        document.getElementById('elem2').value="";
        document.getElementById('elem2').focus();
    }
}

function validate_select()
{
    let h = document.getElementById('con').selectedIndex;
    let hi = document.getElementById('con').options[si].text;

    if(hi == "Please Choose")
    {
        alert("You must choose the country.");
    }
    else
    {
        alert("Your Country is :" + h);
    }
}


function radio()
{
    let sex = document.getElementsByName('gen');
    if(sex[0].checked == false && sex[1].checked == false)
    {
        alert("You must choose a Gender.");
    }
    else
    {
    if(sex[0].checked == true)
    alert("Male");
    else
    alert("Female");
 }
}

function checkemail()
{
    let patt = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    let val = document.getElementById('email').value;

    if(val.match(patt))
    {
        alert("CORRECT EMAILL");
    }
    else
    {
        alert("INCORRECTTTTTT EMAILLLL FORMATT");
        document.getElementById('email').val = "";
        document.getElementById('email').focus();
    }

}