/* This liberary is developed by radu.marinache@oracle.com -CX APPS TECH team 2020-02-07 */


// function used to show console log messages
function  logVBCS(){
    console.log(" ------> RUNNING FROM EXTERNAL LIB <------");
}

function getElementByID(){
var htmlElm  = document.getElementById("odcs-home-page-chat");
console.log(htmlElm);
    
}

function myFunction() {
   setTimeout(logVBCS, 5000);
   setTimeout(getElementByID,5000);
  }



  myFunction();