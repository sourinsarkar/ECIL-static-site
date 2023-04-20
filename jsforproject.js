function validate()
    {
        if( document.getElementById("fname").value=="" )
        {
            alert("Please enter your \"First Name\".");
            document.getElementById("fname").focus();
            return false;
        }

        if( document.getElementById("lname").value=="" )
        {
            alert("Please enter your \"Second Name\".");
            document.getElementById("lname").focus();
            return false;
        }

        if( document.getElementById("custid").value=="" || document.getElementById("custid").value.length<8)
        {
            alert("Please enter your \"Customer ID\".");
            document.getElementById("custid").focus();
            return false;
        }

        if( document.getElementById("pincode").value=="" || document.getElementById("pincode").value.length<6)
        {
            alert("Please enter your \"PIN Code\".");
            document.getElementById("pincode").focus();
            return false;
        }

        if( document.getElementById("cardnum").value=="" || document.getElementById("cardnum").value.length<15)
        {
            alert("Please enter your \"Card Number\".");
            document.getElementById("cardnum").focus();
            return false;
        }

        if( document.getElementById("expdate").value=="" )
        {
            alert("Please enter your \"Exp. Date\".");
            document.getElementById("expdate").focus();
            return false;
        }

        if( document.getElementById("vcc").value==""|| document.getElementById("vcc").value.length<3 )
        {
            alert("Please enter your \"VCC\".");
            document.getElementById("vcc").focus();
            return false;
        }
    }

function validatelogin() 
    {
        if( document.getElementById("usrname").value=="" || document.getElementById("usrname").value.length<8)
        {
            alert("Please enter your \"Customer ID\".");
            document.getElementById("usrname").focus();
            return false;
        }

        alert("You are logged in.");
    }