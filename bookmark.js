var id='1n5RSc9jnxqKr_rcfCZ1Uci90CApBl0y2BDn_WHs8W8A';
var gid = '360894271';
var source='A1:Z50';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid+'&single=true&range='+source;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = "<table id='bookmark'><thead><tr><th>Recent </th><th>Amazon</th><th>Bank</th><th>Bigbasket </th><th>Bookmyshow </th><th>Certificate</th><th>Desktop-App</th><th>Flipkart </th><th>Food</th><th>Freecharge </th><th>Gmail</th><th>Government</th><th>Job-Alert</th><th>Mutual Fund </th><th>My - Music </th><th>Whatsapp</th></tr></thead><tbody id='myTable'>"
  json.table.cols.forEach(colonne => table += '' + colonne.label + '')
  table += ''
  json.table.rows.forEach(ligne => {
    table += "<tr>"
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += "<td>" + valeur + "</td>"
      }
    )
    table += "</tr>"
    }
  )
  table += "</table>"
  return table
}
