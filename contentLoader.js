
/* new page test */
/*
var container = document.getElementById("fillButtons")
var btnNew = document.getElementById("newpage")
btnNew.addEventListener("click",createPage);

function createPage(){
    var opened = window.open("");
    opened.document.write("<html><head><title>MyTitle</title></head><body>test</body></html>");
}
*/

console.log("im here bitch")

/* request information from the content folder and organize it */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        
        /* converting the json into an object */
        var myObj = JSON.parse(this.responseText);

        /* adding page title */
        var tit = document.getElementById("identifier")
        tit.innerHTML = myObj.identifier;

        /* adding title */
        var tit = document.getElementById("tutorial-title")
        tit.innerHTML = myObj.title;
        
        /* looking for the common container for all the generated stuff */
        var doc = document.getElementById("toFill")

        /**
         * basic function:
         * first creates the desired element
         * then creates a text holder to collect the text
         * puts the text into the element
         * puts the element into the final page
         */
        for(i=0; i<myObj.content.length; i++){
            console.log(i);

            /* paragraphs */
            if( Object.keys(myObj.content[i]) == "p"){
                var newpara = document.createElement("p");
                var newtext = document.createTextNode(myObj.content[i].p);
                newpara.appendChild(newtext);
                doc.appendChild(newpara);
                console.log("paragraph loaded");
            }
            /* images */
            else if( Object.keys(myObj.content[i]) == "img"){
                var newImg = document.createElement("img");
                newImg.className = "common-img";
                newImg.src = myObj.content[i].img.url;
                newImg.alt = myObj.content[i].img.alt;
                doc.appendChild(newImg);
                console.log("image loaded");
            }
            /* warning */
            else if( Object.keys(myObj.content[i]) == "w"){
                var newWarn = document.createElement("p");
                newWarn.className = "warning";
                var newtext = document.createTextNode(myObj.content[i].w);
                newWarn.appendChild(newtext);
                doc.appendChild(newWarn);
                console.log("warning loaded");
            }
            /* block code */
            else if( Object.keys(myObj.content[i]) == "code"){
                var newCode = document.createElement("p");
                newCode.className = "code";
                var newtext = myObj.content[i].code;
                newCode.innerHTML = newtext;
                doc.appendChild(newCode);
                console.log("code loaded");
            }
            /* in case you fucked something of above (again) */
            else{
                console.log("you fucked up your code eh?, you can't lie me, i'm your console")
            }
        }
    }
};
xmlhttp.open("GET", "test.json", true);
xmlhttp.send();