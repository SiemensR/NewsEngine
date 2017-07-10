

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
    }
  };
  xhttp.open("GET", "news.xml", true);
  xhttp.send();
}

function myFunction(xml) { //here is a function for adding all news from xml
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th></th><th>Category</th><th>Title</th><th>Link</th><th>Date</th></tr>";
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    "<img class=\"xmImg\" src=" + x[i].getElementsByTagName("enclosure")[0].getAttribute("url") + ">" +
     "</td><td>" +
    x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
    "</td><td>"+
    "<a href=" + x[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue + " target=\"_blank\">" + x[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue + "</a>" +
    "</td><td>" +
    x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue +
    "</td>"+
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
