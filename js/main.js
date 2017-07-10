
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

function loadDocMeduza() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      meduza(this);
    }
  };
  xhttp.open("GET", "meduzanews.xml", true);
  xhttp.send();
}

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  xmlDoc.async = "false";
  var table="<tr><th></th><th>Category</th><th>Title</th><th>Link</th><th>Date</th></tr>";
  var x = xmlDoc.getElementsByTagName("item");
  var e = xmlDoc.getElementsByTagName("enclosure");
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


function meduza(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Image</th><th>Title</th><th>Link</th><th>Date</th></tr>";
  var x = xmlDoc.getElementsByTagName("item");
  var s = xmlDoc.getElementsByTagName("title");
  for (i = 0; i < x.length; i++) {
    table += "<tr><td>" +
   "<img class=\"xmImg\" src=" + x[i].getElementsByTagName("enclosure")[0].getAttribute("url") + ">" +
    "</td><td>" +
    x[i].getElementsByTagName("title")[0].childNodes[1].data +
    "</td><td>" +
    "<a href=" + x[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue + " target=\"_blank\">" + x[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue + "</a>" +
    "</td><td>" +
    x[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue +
    "</td>"+
    "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}
