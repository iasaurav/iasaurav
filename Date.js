<p id="deo"></p>
<p id="demo"></p>

<script>
const d = new Date();
let day = d.getDate();
let year = d.getFullYear();
let month = d.getMonth() + 1;
document.getElementById("demo").innerHTML = day+"/"+year+"/"+month;




const d = new Date();
document.getElementById("deo").innerHTML = d.toISOString().slice(0,4)+d.toISOString().slice(5,7)+d.toISOString().slice(8,10);
</script>
