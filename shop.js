document.getElementById("proizvodi").addEventListener("input", ukupanIznos);

function ukupanIznos() {

 var kolPrvi = Number(document.getElementById("kol1").value)
  kolDrugi = Number(document.getElementById("kol2").value)
  kolTreci = Number(document.getElementById("kol3").value)
  kolCetiri = Number(document.getElementById("kol4").value)
  kolPet = Number(document.getElementById("kol5").value)
  kolSest = Number(document.getElementById("kol6").value)

  cena = (kolPrvi * 20) + (kolDrugi * 10) + (kolTreci * 30) + (kolCetiri * 50) + (kolPet * 70) + (kolSest * 50);
  prostor.innerHTML = cena + " $";

  document.getElementById("rezultati").innerHTML = "Vaš račun je: " + cena + " $" + '<br>';

  if(kolPrvi > 0){
      document.getElementById("rezultati").innerHTML += "Naručeno: Komplet za šišanje, komada " + kolPrvi + "." + '<br>';
  }
  if(kolDrugi > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: Mašinica za šišanje, komada ${kolDrugi}.<br>`
  }
  if(kolTreci > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: Makaze za šišanje, komada ${kolTreci}.<br>`
  }
  if(kolCetiri > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: Set za brijanje, komada ${kolCetiri}.<br>`
  }
  if(kolPet > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: Makaze 2, komada ${kolPet}.<br>`
  }
  if(kolSest > 0){
      document.getElementById("rezultati").innerHTML += `Naručeno: Brijači, komada ${kolSest}.`
  }
  else {
document.getElementById("rezultati").innerHTML += '';
  }

}




const slanje = document.getElementById("slanje");
const ime = document.getElementById("ime");
const telefon = document.getElementById("telefon");
const grad = document.getElementById("grad");
const email = document.getElementById("email");
const adresa = document.getElementById("adresa");

let sveValidno = true;


function proveriIme(){

  if(/^[ ]*[a-zA-Za-žA-Ž]{2,}(([' -][a-zA-Za-žA-Ž ])?[a-zA-Za-žA-Ž ]*)*$/.test(ime.value)){
    ime.classList.add("valid");
  }

  else {
    sveValidno = false;
    ime.classList.remove("valid");
    alert("Upišite svoje ime i prezime");
  }

}

function proveriGrad() {
  if (/^[ ]*[a-zA-Za-žA-Ž]{2,}(([ -][a-zA-Za-žA-Ž ])?[a-zA-Za-žA-Ž ]+)*$/.test(grad.value)){
  grad.classList.add("valid");
}
  else {
    sveValidno = false;
    grad.classList.remove("valid");
    alert("Unesite grad");
  }
}

function proveriAdresu(){

if(/^[a-zA-Za-žA-Ž0-9'-\/\s]+$/.test(adresa.value)){
  adresa.classList.add("valid");

}

else {
  sveValidno = false;
  adresa.classList.remove("valid");
  alert("Unesite svoju adresu");
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
    email.classList.remove("valid");
    alert("Unesite svoj email");
  }

}

function proveri(event){

  event.preventDefault();
  sveValidno = true;

  proveriIme();
  proveriGrad();
  proveriAdresu();
  proveriTelefon();
  proveriEmail();

  if (sveValidno){
    slanje.submit();
  }

}

slanje.addEventListener("submit", proveri);
