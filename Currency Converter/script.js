const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

var fromdropdown = document.querySelector("#fromdropdown");
var todropdown  = document.querySelector("#todropdown");
var bothdropdown= document.getElementsByClassName("dropdown");
var exchangebutton = document.getElementById("submitbutton");

var fromcurr = document.querySelector("#frombox select")
var tocurr = document.querySelector("#tobox select")


for(let select of bothdropdown)
{
    for(currCode in countryList)
    {  
         // From dropdown
        var optionelefrom = document.createElement("option");
        optionelefrom.innerText=currCode;
        optionelefrom.value=currCode;
        fromdropdown.appendChild(optionelefrom);
    
         //To Drop Down
    
         var optioneleto = document.createElement("option");
         optioneleto.innerText=currCode;
         optioneleto.value=currCode;
         todropdown.appendChild(optioneleto);
    }
    select.addEventListener("change",(event)=>
    {
         updateFlag(event.target);
    });
}
 
//  Update Flag Segment

let updateFlag = (element)=>
{
    var currCode = element.value;
    
    let countryCode = countryList[currCode];
    let newflag = `https://flagsapi.com/${countryCode}/shiny/64.png`
    let img = element.parentElement.querySelector("img");
     img.src = newflag;
}
     // Get Exchange Rates Button  

exchangebutton.addEventListener("click", async (event)=>{

   let fromamount = document.getElementById("frominput");

   let fromamountvalue =  fromamount.value;
   if(fromamountvalue ==="" || fromamountvalue <1)
   {
         fromamount.value=1;
   }
     
   let fromcurrnew = fromcurr.value.toLowerCase();
   let tocurrnew = tocurr.value.toLowerCase();
   
   const URl =   `${BASE_URL}/${fromcurrnew}.json`; 
   let response = await fetch(URl);
   let data = await response.json();
   let rate = data[fromcurrnew][tocurrnew]; 

   let toamount = document.getElementById("toinput");
   toamount.value =  fromamountvalue*rate ;
})


// Swapping the flags and Currency

var fromimage = document.getElementById("fromimage");
var toimage = document.getElementById('toimage');
var exchangebutton = document.getElementById("exchangebutton");

exchangebutton.addEventListener("click",()=>
{
     // TO swapp the Image

       temp =  fromimage.src;
       fromimage.src = toimage.src;
       toimage.src = temp;
     
       // to swap the Currency

     currencynametemp = fromcurr.value;
     fromcurr.value = tocurr.value;
     tocurr.value = currencynametemp;
})














