/* This liberary is developed by radu.marinache@oracle.com -CX APPS TECH team 2020-02-07 */


// function used to show console log messages
function  logVBCS(){
    console.log(" ------> RUNNING FROM EXTERNAL LIB <------");
}

function getElementByID(ID){
var htmlElm  = document.getElementById(ID)
console.log(v)
    
}

function myFunction() {
   setTimeout(logVBCS, 5000);
   setTimeout(getElementByID("odcs-home-page-chat"), 5000);
  }



  myFunction();