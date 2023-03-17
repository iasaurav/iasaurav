var select = document.getElementById("female"); 
var options = ['Female Artist','Aastha-Gill','Akriti Kakar','Alka Yagnik','Anuradha Paudwal','Asees Kaur','Asha Bhosle','Chinmayi','Dhvani Bhanushali','Falguni Pathak','Hard Kaur','Harshdeep Kaur','Jasmine Sandlas','Jonita Gandhi','Jyotica Tangri','Kanika Kapoor','Lata Mangeshkar','Mahalakshmi Iyer','Mamta Sharma','Monali Thakur','Neeti Mohan','Neha Kakkar','Nikhita Gandhi','Palak Muchhal','Parampara Tandon','Rekha Bhardwaj','Shalmali Kholgade','Sharda Sinha','Shilpa Rao','Shirley Setia','Shreya Ghoshal','Shreya-Ghoshal','Shruti Pathak','Shweta Mohan','Shweta Pandit','Sona Mohapatra','Sonu Kakkar','Sunanda Sharma','Sunidhi Chauhan','Tulsi Kumar']; 

// Optional: Clear all existing options first:
select.innerHTML = "";
// Populate list with options:
for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}
  
  
  
  var selec = document.getElementById("male"); 
var option = ['Male','A. R. Rahman','Abhijeet Bhattacharya','Akhil','Amaal Mallik','Ami Mishra','Amit Trivedi','Ankit Tiwari','Arijit Singh','Arjun-Kanungo','Armaan Malik','Ash King','Atif-Aslam','Ayushmann Khurrana','B-Praak','Babbu Maan','Babul Supriyo','Badshah','Bappi Lahiri','Benny Dayal','Bohemia','Bpraak','Daler Mehndi','Darshan-Raval','Dhanush','Diljit Dosanjh','Gajendra Verma','Gulzaar-Chhaniwala','Gurdas Maan','Guru Randhawa','Hansraj-Raghuwanshi','Happy Raikoti','Himesh Reshammiya','Ikka','Jagjit Singh','Jassie-Gill','Javed Ali','Jeet Gannguli','Jubin Nautiyal','Kailash Kher','Kishore Kumar','KK','Kumar Sanu','Master Saleem','Meet Bros','Mika Singh','Mohammed Aziz','Mohammed Irfan','Mohammed Rafi','Mohit Chauhan','Nakash Aziz','Nitin Mukesh','Pankaj Udhas','Papon','Pritam','R. D. Burman','Raftaar','Rahat-Fateh-Ali-Khan','Rahul Vaidya','Roop Kumar Rathod','S. D. Burman','S. P. Balasubrahmanyam','Sanam','Shaan','Shabab Sabri','Shankar Mahadevan','Sharry-Mann','Sid Sriram','Sidhu Moose Wala','Sonu Nigam','Sukhwinder Singh','Suresh Wadkar','Tanishk Bagchi','Tochi Raina','Tony Kakkar','Udit Narayan','Vishal Dadlani','Vishal Mishra','Yasser Desai','Yo Yo Honey Singh'];
// Optional: Clear all existing options first:
selec.innerHTML = "";
// Populate list with options:
for(var a = 0; a < option.length; a++) {
    var op = option[a];
    selec.innerHTML += "<option value=\"" + op + "\">" + op + "</option>";
}
  
  
  
  
  
  
  var sele = document.getElementById("mail"); 
var optio = ['Email','all','spam','trash']; 

// Optional: Clear all existing options first:
sele.innerHTML = "";
// Populate list with options:
for(var b = 0; b < optio.length; b++) {
    var oa = optio[b];
    sele.innerHTML += "<option value=\"" + oa + "\">" + oa + "</option>";
}
  








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
        window.location.assign(email + encoded); // redirect)
      }
      return false;
    });
  });
