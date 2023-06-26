function showLakes()
{
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {myFunction(this);}
    xhttp.open("GET");
    xhttp.send();
}
function myFunction(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("CD");
  let table="<tr><th>Name</th><th>Location</th><th>Comment</th><th>type</th></tr>";
  for (let i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("LOCATION")[0].childNodes[0].nodeValue +
    "</td></tr>"+
    x[i].getElementsByTagName("COMMENT")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("TYPE")[0].childNodes[0].nodeValue +
    "</td><td>";
  }
  document.getElementById("input").innerHTML = table;
}