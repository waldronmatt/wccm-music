//Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var atshirt = new Array();
 atshirt["ts"]=10;
 atshirt["tm"]=12;
 atshirt["tl"]=14;
 atshirt["tn"]=0;
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getTshirtPrice()
{  
    var TshirtPrice=0;

    //Get a reference to the form id="survey"

    var theForm = document.forms["survey"];

    //Get a reference to the cake the user Chooses name=tshirts":

    var tshirts = theForm.elements["tshirts"];

    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons

    for(var i = 0; i < tshirts.length; i++)
    {
        //if the radio button is checked

        if(tshirts[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"

            TshirtPrice = atshirt[tshirts[i].value];

            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the price
    return TshirtPrice;
}




//Set up an associative array
 //The keys represent the size of the cake
 //The values represent the cost of the cake i.e A 10" cake cost's $35
 var ahoodie = new Array();
 ahoodie["hs"]=20;
 ahoodie["hm"]=22;
 ahoodie["hl"]=24;
 ahoodie["hn"]=0;
	 
// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getHoodiePrice()
{  
    var HoodiePrice=0;

    //Get a reference to the form id="survey"

    var theForm = document.forms["survey"];

    //Get a reference to the cake the user Chooses name=tshirts":

    var hoodies = theForm.elements["hoodies"];

    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons

    for(var i = 0; i < hoodies.length; i++)
    {
        //if the radio button is checked

        if(hoodies[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"

            HoodiePrice = ahoodie[hoodies[i].value];

            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the price
    return HoodiePrice;
}






 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var magprices= new Array();
 magprices["mag1"]=0;
 magprices["mag2"]=16;
 magprices["mag3"]=25;
 magprices["mag4"]=30;
 magprices["mag5"]=38;
 magprices["mag6"]=50;
 magprices["mag7"]=65;
 magprices["mag8"]=80;

//This function finds the filling price based on the 
//drop down selection

function getMagPrice()
{
    var MagPrice=0;

    //Get a reference to the form id="cakeform"

    var theForm = document.forms["survey"];

    //Get a reference to the select id="filling"

     var magtype = theForm.elements["magtype"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5

    MagPrice = magprices[magtype.value];

    //finally we return cakeFillingPrice

    return MagPrice;
}

 //Set up an associative array 
 //The keys represent the filling type
 //The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
 //We use this this array when the user selects a filling from the form
 var shipprices= new Array();
 shipprices["ship1"]=0;
 shipprices["ship2"]=0;
 shipprices["ship3"]=2;
 shipprices["ship4"]=5;
 shipprices["ship5"]=7;
 shipprices["ship6"]=10;

//This function finds the filling price based on the 
//drop down selection

function getShipPrice()
{
    var ShipPrice=0;

    //Get a reference to the form id="cakeform"

    var theForm = document.forms["survey"];

    //Get a reference to the select id="filling"

     var shiptype = theForm.elements["shiptype"];
     
    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5

    ShipPrice = shipprices[shiptype.value];

    //finally we return cakeFillingPrice

    return ShipPrice;
}

function customT()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0

    var customT=0;

    //Get a refernce to the form id="cakeform"

    var theForm = document.forms["survey"];

    //Get a reference to the checkbox id="includeinscription"

    var customTshirt = theForm.elements["customTshirt"];

    //If they checked the box set inscriptionPrice to 20

    if(customTshirt.checked==true){
        customT=7;
    }

    //finally we return the inscriptionPrice

    return customT;
}

function customH()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0

    var customH=0;

    //Get a refernce to the form id="cakeform"

    var theForm = document.forms["survey"];

    //Get a reference to the checkbox id="includeinscription"

    var customHoodie = theForm.elements["customHoodie"];

    //If they checked the box set inscriptionPrice to 20

    if(customHoodie.checked==true){
        customH=10;
    }

    //finally we return the inscriptionPrice

    return customH;
}
       
function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var tPrice = getTshirtPrice() + getHoodiePrice() + getMagPrice() + getShipPrice() + customT() + customH();;

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='block';
    divobj.innerHTML = "Total Price: $"+tPrice;
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display='none';
}