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
    console.log("RUN REST FUNCTION")
    var url = 'https://ucf3-zkav-fa-ext.oracledemos.com/crmRestApi/resources/latest/contacts'        
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("Content-type", "application/vnd.oracle.adf.resourceitem+json");
    xhttp.setRequestHeader("Authorization", "Basic " + btoa("john.dunbar:myn56839"));
    xhttp.send();
    let response = JSON.parse(xhttp.responseText);
    console.log(response)

} 


function myFunction() {
    setTimeout(logVBCS, 5000);
    setTimeout(getMYElementByID,5000);
    setTimeout(CALL_REST,5000);
   }

  myFunction();
  CALL_REST();