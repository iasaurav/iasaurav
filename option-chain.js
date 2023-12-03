
var year="2023-12-";
  
var bankex=['04','11','18','22',];var finnifty=['05','12','19','26',];var banknifty=['06','13','20','28',];var nifty=['07','14','21','28',];var sensex=['08','15','22','29',];
  
   				
  var a="BANKEX";var b="FINNIFTY";var c="BANKNIFTY";var d="NIFTY";var e="SENSEX";
   
   
  
  var url="https://instaoptions.fyers.in/instruments#instrument=";
  
  
 
let mmyy = "-"+year.slice(5,7)+"-"+year.slice(0,4);
  
  
 $.each(bankex, function(i, data) {
var ul_data = [
  '<tr><td><a href="'+url+a+'&expiryDate='+year+bankex[i]+'"target="_blank">'+bankex[i]+mmyy+'</a></td>'+'<td><a href="'+url+b+'&expiryDate='+year+finnifty[i]+'"target="_blank">'+finnifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+c+'&expiryDate='+year+banknifty[i]+'"target="_blank">'+banknifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+d+'&expiryDate='+year+nifty[i]+'"target="_blank">'+nifty[i]+mmyy+'</a></td>'+'<td><a href="'+url+e+'&expiryDate='+year+sensex [i]+'"target="_blank">'+sensex[i]+mmyy+'</a></td></tr>'
  
 ];

            $("#drive").append(ul_data);

        });
