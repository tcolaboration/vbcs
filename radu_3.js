/* This liberary is developed by radu.marinache@oracle.com -CX APPS TECH team 2020-02-07 */


// function used to show console log messages
function  logVBCS(value){
    console.log(" ------> RUNNING FROM EXTERNAL LIB <------");
    console.log(" ------> " + value);
}

function getElementByID(ID){
document.getElementById(ID)

    
}

logVBCS(getElementByID("odcs-home-page-chat"));
