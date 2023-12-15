var id = '1Ar4qDpDWBZey6DHJ3OvWdOK40CuSWoAA7SQrkd1dws8';
var gid = '1206088558';
var source='A14:A14';
  
  var url='\x68\x74\x74\x70\x73\x3A\x2F\x2F\x64\x6F\x63\x73\x2E\x67\x6F\x6F\x67\x6C\x65\x2E\x63\x6F\x6D\x2F\x73\x70\x72\x65\x61\x64\x73\x68\x65\x65\x74\x73\x2F\x64\x2F'+ id+ '\x2F\x67\x76\x69\x7A\x2F\x74\x71\x3F\x74\x71\x78\x3D\x6F\x75\x74\x3A\x6A\x73\x6F\x6E\x26\x74\x71\x26\x67\x69\x64\x3D'+ gid+ '\x26\x73\x69\x6E\x67\x6C\x65\x3D\x74\x72\x75\x65\x26\x72\x61\x6E\x67\x65\x3D'+ source;fetch(url).then((response)=>{return response.text()}).then((data)=>{return document.getElementById("\x6A\x73\x6F\x6E").innerHTML= myItems(data.slice(47,-2))});function myItems(jsonString){var json=JSON.parse(jsonString);var table="";json.table.cols.forEach((colonne)=>{return table+= ''+ colonne.label+ ""});table+= '';json.table.rows.forEach((ligne)=>{table+= '';ligne.c.forEach((cellule)=>{try{var valeur=cellule.f?cellule.f:cellule.v}catch(e){var valeur=''};table+= ""+ valeur+ ""});table+= ''});table+= '';return table}
  
  

  
