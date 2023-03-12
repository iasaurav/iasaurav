document.write("<form id='atg-form'>\r\n<div id=\"json\"><\/div>\r\n<\/form>");




function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return '';
    }
}

var myId;
  var form = document.querySelector('#atg-form');

form.addEventListener('change', (e) => {
  e.preventDefault();
    var x = form.querySelector('#x').value;
    yt = getId(x);
    
    $('#yt').html(yt);
  var gp='https://pay.google.com/about/static_kcs/images/logos/footer-logo.svg';
  var pa='https://assetscdn1.paytm.com/images/catalog/category/5165/paytm_logo.png';
  var ma='https://download.logo.wine/logo/MobiKwik/MobiKwik-Logo.wine.png';
  var pp='https://mma.prnewswire.com/media/1607489/PhonePe_Logo.jpg?w=200';

  
  var blank = form.querySelector('#blank').checked;
  var insurance = form.querySelector('#insurance').checked;
  
  var password = form.querySelector('#password').checked;
  var netbanking = form.querySelector('#netbanking').checked;
  
  var payment = form.querySelector('#payment').checked;
  var expense = form.querySelector('#expense').checked;
    var bank = form.querySelector('#bank').checked;
  var debit = form.querySelector('#debit').checked;
  var credit = form.querySelector('#credit').checked;
  
  
  
  var date=new Date();  
var day=date.getDate();  
var month = date.toLocaleString("default", { month: "2-digit" });
var year=date.getFullYear(); 
  
  let encoded = "https://chart.googleapis.com/chart?chs=400x400&cht=qr&chl="+encodeURIComponent('upi://pay?pa='+x+'&pn=saurav&am=');
  
  
  let result = x.slice(3,-5)+"%2f"+x.slice(0,2)+"%2f"+x.slice(-4);
  
  let age = month+"%2f"+day+"%2f"+year;
  
  let ager = "https://www.calculator.net/age-calculator.html?today="+result+"&ageat="+age+"&x=129&y=17";
  
  
 
 






  

   
   

  


  
  
  
  var output = form.querySelector('#output');
 var ias="";
  var ins = "";
  var pass = "";
  var net = "";
  var pay = "";
  var exp = "";
var ban = "";
  
  var deb = "";
  var cre = "";
  
  
  
  
  if (blank) {
    ias = "<a href='tel:"+x+"'>Phone-Call</a>"+"<a href='sms:"+x+"'>Message</a>"+"<a href='//wa.me/91"+x+"'>Whatsapp</a>"+"<a href='https://www.truecaller.com/search/in/"+x+"'target='_blank'>Truecaller</a>"+"<a href='sms:1900?body="+x+"'>Port</a>"+"<a href='https://play.google.com/store/search?q="+x+"&=apps'>Playstore</a>"+"<a href='"+x+"'></a>"+"<a href='"+ager+"'target='_blank'>Age-Calculate</a>"+"<a href='https://api-ssl.bitly.com/v3/shorten?access_token=c0fe84598b34771983307a25173700beaeba2f00&longUrl="+x+"&format=txt'>bitly</a>"+"<a href='https://translate.google.com/?hl=hi&sl=auto&tl=hi&text="+x+"'>Translate</a>"+"<a href='https://www.bing.com/translator/?text="+x+"&from=en&to=hi'>Bing-Translate</a>"+"<a href='https://mail.google.com/mail/u/0/?ui=2#search/"+encodeURIComponent(x)+"'target='_blank'>gmail-Delete</a>"+"<a href='https://mail.google.com/mail/mu/mp/311/#tl/search/"+encodeURIComponent(x)+"'>gmail-(Normal)</a>"+
      "<a href='mailto:"+x+"'>Email-Now</a>"
;
  }
  
  if (insurance) {
    ias = "<a href='https://whereismytrain.in/web/pnr/" + x+"'>Pnr-Enquiry</a>"+"<a href='https://www.ixigo.com/pnr-status-enquiry?pnr=" + x+"'target='_blank'>Ixigo-Pnr</a>"+"<a href='https://www.confirmtkt.com/rbooking/seat-availability/"+x+"/2S,SL,3E,3A,2A,1A/GN/"+day+"-"+month+"-"+year+"'>Confirm-Tkt</a>"

    ;
  }

  if (password) {
    ias = "<a href='https://ytaud.io/play/" + yt+"'target='_blank'>Audio-Player</a>"+"<a href='https://video.genyt.net/" + yt+"'>Video-Download</a>"
      +"<a href='https://video.genyt.net/" + yt+"'target='_blank'>Video-Download</a>"+"<a href='https://mp4api.ytjar.info/?id=" + yt+"#'target='_blank'>Video-Download2</a>"+"<a href='https://www.genfrom.com/process.php?u=" +yt+"'target='_blank'>Video-Download3</a>"+"<a href='" + yt+"&t=0s'>Video-Download3</a>"+"<iframe width='560' height='315' src=https://www.youtube.com/embed/"+yt+"?start=15'title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'allowfullscreen></iframe>"
      
      "<a href='https://www.canva.com/templates/?query=" + x+"&filters=eyJBIjoiTUA3bkJPVl85eWJlQjZWUSIsIkE%2FIjoiQiJ9'target='_blank'>Canva</a>";

  
  }
  
  if (netbanking) {
    ias =  "<a href='https://www.airtel.in/recharge/prepaid?siNumber=" + x+"'target='_blank'>Airtel-Recharge</a>"
+"<a href='https://www.jio.com/selfcare/recharge/mobility/plans/?serviceId=" + x+"&serviceType=mobility&next=PREPAID&billingType=PREPAID'target='_blank'>Jio-Recharge</a>";
  }
  
  
  if (payment) {
    ias = "</br></br><a href='https://www.google.com/search?q=" + x+"'target='_blank'>Google</a>"+"<a href='//mail.google.com/mail/u/0/?ui=2#search/before%3A2100%2F12%2F31 from: " + x+"'target='_blank'>Delete-Gmail</a>"+"<a href='https://www.google.com/search?q=wynk: " + x+"'target='_blank'>Wynk</a>";
  }
  
  if (expense) {
    ias = "<a href='" +encoded+"'><img src='"+gp+"'></a>"+"<a href='paytmmp://pay?pa=" + x+"&pn=%20&am='><img src='"+pa+"'></a>"+"<a href='" + encoded+"'><img src='"+ma+"'></a>"+"<a href='" + encoded+"'><img src='"+pp+"'></a>"+"</br><img src='" + encoded+"'style='width:150px;'>";
  }
  
  if (bank) {
    ias = "<a href='https://www.amazon.in/s?k="+x+"'target='_blank'>Amazon</a>"+"<a href='https://www.bigbasket.com/ps/?q="+x+"'target='_blank'>Big-Basket</a>"+"<a href='https://www.flipkart.com/search?q="+x+"'target='_blank'>Flipkart</a>"+"<a href='https://www.flipkart.com/grocery/pr?q="+x+"&marketplace=GROCERY&sid=search.flipkart.com&as-pos=2&as-type=HISTORY&as=on&pageUID=1673355486669'target='_blank'>Flipkart-Grocery</a>";
  }
  
  if (debit) {
    ias ="<a href='https://www.flipkart.com/rv/orders/search?order_time="+x+"'target='_blank'>Flipkart</a>"+"<a href='https://www.amazon.in/gp/your-account/order-history?unifiedOrders=0&digitalOrders=0&janeOrders=0&orderFilter=year-"+x+"'target='_blank'>Amazon</a>" ;
  }
  
  if (credit) {
     ias = "<a href='"+x+"'target='_blank'>1Mg</a>"+"<a href='https://m.netmeds.com/catalogsearch/result/"+x+"/all'target='_blank'>Net-Meds</a>";
  
  }
  
  
  
     
     var anchor = `${ins}${pass}${net}${pay}${exp}${ban}${deb}${cre}${ias}`;
  output.innerHTML = anchor;

  
  
  
  
  });


      
    


    
    
      
      
     
    
    
    
    
  
  
  
  
  




  
  
  


  
  
  


  
  
  

  
    var id='1n5RSc9jnxqKr_rcfCZ1Uci90CApBl0y2BDn_WHs8W8A';
var gid = '1088173221&single=true&range=C12:C12';

  
  
  
  
  
  
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("json").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = ""
 json.table.cols.forEach(colonne => table += '' + colonne.label + "")
  table += ''
  json.table.rows.forEach(ligne => {
    table += ''
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += "" + valeur + ""
      }
    )
    table += ''
    }
  )
  table += ''
  return table
}
