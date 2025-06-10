// wwwroot/js/site.js

window.siteInterop = {
    showAlert: function (message) {
        alert(message);
    },
    
    logToConsole: function (msg) {
        console.log("From Blazor: " + msg);
    }
};
