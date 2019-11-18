// Declaring variables
let barkod = document.querySelector('#barkod');
let naziv = document.querySelector('#naziv');
let opisArtikla = document.querySelector('#opis_artikla');
let vrstaArtikla = document.querySelector('#vrsta_artikla');
let cena = document.querySelector('#cena');
let cenaPDV = document.querySelector('#cena_PDV');
let slika = document.querySelector('#slika');
let button = document.querySelector('#button');


// Get date&time
var currentdate = new Date();
    var datetime = + currentdate.getDate() + "/"+(currentdate.getMonth()+1) 
    + "/" + currentdate.getFullYear() + " / " 
    + currentdate.getHours() + ":" 
    + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(datetime);

// Allow just an integer
  $(document).ready(function(){
    cena.onkeyup = function(){
      if(Number.isInteger(Number(cena.value))){
        cena.style.borderColor = '';
        let pdv = Number(cena.value) + Number(cena.value*20/100);
        $("#cena_PDV").val(pdv);
      } else {
        cena.style.borderColor = 'red';
        $("#cena_PDV").val('');
      }
    }
  });

  // Allow only .png image extension
  $('#image').change(
    function () {
        var fileExtension = ['png'];
        if ($.inArray($("#slika").val().split('.').pop().toLowerCase(), fileExtension) == -1) {
          alert("Only '.png' format is allowed.");
          $("#slika").src(''); // Clear field this.value = ''
          return false;
        }
    });

// Display image before submiting
var loadFile = function(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('slika');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  };

// Global function - add to Table
 function productUpdate() {
   if($("#barkod").val() != null && $("#barkod").val() != '' &&
      $("#naziv").val() != null && $("#naziv").val() != '' &&
      $("#vrsta_artikla").val() != null && $("#vrsta_artikla").val() != '') {
        insertValues();
        formClear();
        barkod.focus();
      } else {
        alert("Polja barkod, naziv i vrsta artikla moraju da budu popunjena!");
      }
 }

  //Insert input values into table 
 function insertValues() {
    $("#table tbody").append(
      "<tr>"+
          "<td>"+barkod.value+"</td>" +
          "<td>"+naziv.value+"</td>" +
          "<td>"+opisArtikla.value+"</td>" +
          "<td>"+vrstaArtikla.value+"</td>" +
          "<td>"+cena.value+"</td>" +
          "<td>"+cenaPDV.value+"</td>" +
          "<td><img style='width:100px; height:80px'; src="+slika.src+"></td>" +
          "<td>"+datetime+"</td>" +
      "</tr>"
  );
  }

  // Clear form after submit
  function formClear() {
    $("#myForm")[0].reset(); 
  };

  // Filter table for name
  function searchName() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.querySelector("#search");
    filter = input.value.toUpperCase();
    table = document.querySelector("#table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
        tr[i].style.display = "none";
        }
      } 
    }
  };



 



 



