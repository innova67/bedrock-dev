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
            /**
             * basic function:
             * first creates the desired element
             * then creates a text holder to collect the text
             * puts the text into the element
             * puts the element into the final page
             */

            /* paragraphs */
            if( myObj.content[i] == p){
                var newpara = document.createElement("p");
                var newtext = document.createTextNode(myObj.content[i].p);
                newpara.appendChild(newtext);
                doc.appendChild(newpara);
            }
            /* images */
            else if( myObj.content[i] == img){
                var newImg = document.createElement("img");
                newImg.src = myObj.content[i].img.url;
                newImg.alt = myObj.content[i].img.alt;
                doc.appendChild(newImg);
            }
            /* warning */
            else if( myObj.content[i] == w){
                var newWarn = document.createElement("p");
                newWarn.className = "warning";
                var newtext = document.createTextNode(myObj.content[i].w);
                newWarn.appendChild(newtext);
                doc.appendChild(newWarn);
            }
            else if( myObj.content[i] == code){
                var newCode = document.createElement("p");
                newCode.className = "code";
                var newtext = document.createTextNode(myObj.content[i].code);
                newCode.appendChild(newtext);
                doc.appendChild(newCode);
            }
            else{
                console.log("something very strange is happening here :O")
            }
        }
    }
};
xmlhttp.open("GET", "../content/tutorials/test.json", true);
xmlhttp.send();
