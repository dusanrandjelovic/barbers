const slanje = document.getElementById("slanje");
const ime = document.getElementById("ime");
const telefon = document.getElementById("telefon");
const grad = document.getElementById("grad");
const email = document.getElementById("email");
const adresa = document.getElementById("adresa");

let sveValidno = true;


function proveriIme(){

  if(/^([a-zA-Za-žA-Ž'-\s])+$/.test(ime.value)){
    ime.classList.add("valid");
  }

  else {
    sveValidno = false;
    ime.classList.remove("valid");
    alert("Unesite pravilno svoje ime.");
  }

}

function proveriTelefon(){
  if (/^0\d{2}\/\d{3}-\d{3,4}$/.test(telefon.value)){
  telefon.classList.add("valid");
}
  else {
    sveValidno = false;
    telefon.classList.remove("valid");
  alert("Unesite u pravilnom formatu svoj broj telefona");
  }
}

function proveriEmail(){
  if (/^[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}$/.test(email.value)){
  email.classList.add("valid");
}
  else {
    sveValidno = false;
    ime.classList.remove("valid");
    alert("Pravilno unesite svoj email.");
  }

}

function proveriWebadresu() {
  if (/^(https?:\/\/)?(www\.)?[a-z0-9]+[.-]?[a-z0-9]+\.[a-z]{2,6}[\/]?$/.test(webadresa.value)){
  webadresa.classList.add("valid");
}
  else {
    sveValidno = false;
    webadresa.classList.remove("valid");
    alert("Niste dobro uneli svoju web adresu.");
  }
}

function proveriLozinku(){

if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(lozinka.value)){
  lozinka.classList.add("valid");

}

else {
  sveValidno = false;
  lozinka.classList.remove("valid");
  alert("Lozinka mora da ima najmanje 8 karaktera i da sadrži barem jedno malo slovo, jedno veliko slovo, broj i neki od sledećih znakova !@#$%&^*");
}

}

function proveri(event){

  event.preventDefault();
  sveValidno = true;

  proveriIme();
  proveriTelefon();
  proveriEmail();
  proveriWebadresu();
  proveriLozinku();

  if (sveValidno){
    slanje.submit();
  }

}

slanje.addEventListener("submit", proveri);
