
    var id = '1n5RSc9jnxqKr_rcfCZ1Uci90CApBl0y2BDn_WHs8W8A';
var gid = '1906444779';
var source='J1:R100';
var url='\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x73\x70\x72\x65\x61\x64\x73\x68\x65\x65\x74\x73\x2F\x64\x2F'+ id+ '\x2F\x67\x76\x69\x7A\x2F\x74\x71\x3F\x74\x71\x78\x3D\x6F\x75\x74\x3A\x6A\x73\x6F\x6E\x26\x74\x71\x26\x67\x69\x64\x3D'+ gid+ '\x26\x73\x69\x6E\x67\x6C\x65\x3D\x74\x72\x75\x65\x26\x72\x61\x6E\x67\x65\x3D'+ source
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = "</br></br><table id='custom'><thead><tr><th>Saurav-Watchlist</th><th>Future-Chart</th><th>Index-Chart</th><th>Option-Chain </th><th>Market-Mover</th><th>Csv-File</th><th>Weightage</th><th>Investing.com</th><th>Webpage</th></tr></thead><tbody id='myTable'>"
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









var year="2023-12-";
var bankex=['04','11','18','22',];var finnifty=['05','12','19','26',];var banknifty=['06','13','20','28',];var nifty=['07','14','21','28',];var sensex=['08','15','22','29',];
  
   				
  var a="BANKEX";var b="FINNIFTY";var c="BANKNIFTY";var d="NIFTY";var e="SENSEX";
  var url="https://instaoptions.fyers.in/instruments#instrument=";
let mmyy = "-"+year.slice(5,7)+"-"+year.slice(0,4);
 $.each(bankex, function(i, data) {
var ul_data = ['<tr><td><a href="'+url+a+'&expiryDate='+year+bankex[i]+'"target="_blank">'+bankex[i]+mmyy+'</a></td>'+'<td><a href="'+url+b+'&expiryDate='+year+finnifty[i]+'"target="_blank">'+finnifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+c+'&expiryDate='+year+banknifty[i]+'"target="_blank">'+banknifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+d+'&expiryDate='+year+nifty[i]+'"target="_blank">'+nifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+e+'&expiryDate='+year+sensex [i]+'"target="_blank">'+sensex[i]+mmyy+'</a></td></tr>'];
            $("#drive").append(ul_data);

        });
