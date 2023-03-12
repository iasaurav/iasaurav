
  $(function() {

    // bindsaurav change event to select
    $('#male').on('change', function() {
      var u = "https://www.google.com/search?q=wynk:";
      var url = $(this).val(); // get selected value
      let encoded = encodeURIComponent(url);
      if (url) { // require a URL
        window.open(u + encoded); // redirect)
      }
      return false;
    });
  });


  $(function() {
    // bind change event to select
    $('#female').on('change', function() {
      var uri = $(this).val(); // get selected value
      let encoded = encodeURIComponent(uri);
      if (uri) { // require a URL
        window.open("https://www.google.com/search?q=wynk:" + encoded); // redirect)
      }
      return false;
    });
  });



$(function() {
    // bind change event to select
    $('#mail').on('change', function() {
var email = "https://mail.google.com/mail/u/0/?ui=2#";
      var mail = $(this).val(); // get selected value
      let encoded = encodeURIComponent(mail);
      if (uri) { // require a URL
        window.open(email + encoded); // redirect)
      }
      return false;
    });
  });
