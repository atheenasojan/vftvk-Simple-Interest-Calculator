function compute() /*this function gets input data, validates and provides amount*/
{
    //get data from user-amount, rate and time
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var actyear=parseFloat(years);
    var displayyear=2021+Number(actyear);

    //checks if principal is not 0 and not negative
    if (principal<1)
    {alert("Enter a positive number");
    principal.focus();
    
    }
    else  //if not, provides the calculated amount including interest
    {
    var interest = (principal*actyear*rate/100);
    var amount=parseFloat(interest);
    document.getElementById("result").innerHTML="You will receive an amount of "+amount+" in the year "+displayyear;

    }
}

function SV() //displays slider value
{
    var x = document.getElementById("rate").value;
    document.getElementById("nsv").innerHTML=x;
    
}


        