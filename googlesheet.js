function HYPERLINK (a, b) { 
return "("+a+"', '"+b+"')";

}

function paytm (o, p, q) { let a= "paytmmp://pay?pa="+o+ "&pn=" + p + "&am=" + q;
 return "<a href='" + a + "'>" + p + "</a>";
}
function paytmb (o, p, q, r) { 
let b = "paytmmp://pay?pa=" + 0 + "@" + p + ".ifsc.npci&pn=" + q + "&am=" +r;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht=qr&chl="; return "<a href='" + b + "'>Bank-Account</a>";
} 

function upiq(o, p, q) {
let a="paytmmp://pay?pa="+o+ "&pn=" + p + "&am=" + q;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht-qr&chl=";
let encoded = qr + encodeURIComponent(a);
return "<a href='" + encoded + "'>Upi-Qr</a>";
}

function bankq(o, p, q, r) {
let b = "paytmmp://pay?pa="+o+ "@" + p + "&pn=" + q + "&am=" + r;
let qr= "https://chart.googleapis.com/chart?chs-250x250&cht=qr&chl="; let encode = qr + encodeURIComponent(b);
return "<a href='" + encode + "'>Bank-Qr</a>";}
function anchor(a,b) {
return "<a href='"+a+"'>"+b+"</a>";
}
function anchorb(c,d) {
return "<a href='"+c+"'target='_blank'>"+d+"</a>";
}
function option(e) {
return "<option value='"+e+"'>";
}
function optionb(f,g) {
return "<option value='"+f+"'>"+g+"</option>";
}
function WhatsApp(h,i) {
return "<a href='//wa.me/91"+h+"'>"+i+"</a>";
}

function phone(j,k) {
return "<a href='tel:"+j+"'>"+k+"</a>";
}
function Drive(l,m) {
return "<a href='"+l.slice(32,-18)+"'target='_blank'>"+m+"</a>";
}
function playstore(n) {
return "<a href='https://play.google.com/store/search?q="+encodeURIComponent(n)+"&=apps'>"+n+"</a>";
}

function uri(phone, web) {
  if (Array.isArray(phone)) {
    return phone.map((row, index) => uri(row[0]), web);
  }
  const phoneNumber = String(phone).replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
;
  return web === true
    ? `//${phoneNumber}`
    : `//${phoneNumber}`;
}


function TRANSLATE(input)
{
  var languageOutput = LanguageApp.translate(input, 'en', 'hi'); 
  return languageOutput;

}
function shorter_URL(url) {
    try {
        if (url == undefined) {
            throw 'url is empty or is not a valid url!'
        }
        let content = UrlFetchApp.fetch('https://tinyurl.com/api-create.php?url=' + encodeURI(url));
        if (content.getResponseCode() != 200) {
            return 'An error occured: [ ' + content.getContentText() + ' ]';
        }
        return content.getContentText();
    } catch (e) {
        return 'An error occured: [ ' + e + ' ]';
    }