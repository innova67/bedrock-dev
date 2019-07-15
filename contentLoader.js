var container = document.getElementById("fillButtons")

/* new page test */
var btnNew = document.getElementById("newpage")
btnNew.addEventListener("click",createPage);

function createPage(){
    var opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
}

console.log("im here bitch")

/* request information from the content folder and organize it */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        /* converting the json into an object */
        var myObj = JSON.parse(this.responseText);

        /* adding title */
        var doc = document.getElementById("toFill")
        doc.innerHTML = myObj.title;
        
        /* looking for different types of content */
        for(i=0; i<myObj.content.length; i++){
            console.log(i);
            console.log(Object.keys(myObj.content[i]));
        }
    }
};
xmlhttp.open("GET", "../content/tutorials/test.json", true);
xmlhttp.send();
