/* This liberary is developed by radu.marinache@oracle.com -CX APPS TECH team 2020-02-07 */


// function used to show console log messages
function  logVBCS(){
    console.log(" ------> RUNNING FROM EXTERNAL LIB <------");
}

function getMYElementByID(){
var htmlElm  = document.getElementById("odcs-home-page-chat");
console.log(htmlElm);
    
}




function CALL_REST(){
  var rez =    $.ajax({
    type: "GET",
    dataType: 'json',
    headers: {
    'authorization':  "Basic " + btoa("john.dunbar:myn56839"),
    'content-type': "application/json"
},
     url: "https://ucf3-zkav-fa-ext.oracledemos.com/crmRestApi/resources/latest/contacts",

     success: function (result) {
         console.log(result)
     },
     async: false
 })
}



function myFunction() {
    setTimeout(logVBCS, 5000);
    setTimeout(getMYElementByID,5000);
    setTimeout(CALL_REST,5000);
   }

  myFunction();
  CALL_REST();