function handlebill(e){
    console.log(e);
    e.preventDefault(); //pour que le formulain ne rafrichi pas
    console.log(document.addbill.reason.value);

    var montantValue = document.addbill.montant.valueAsNumber;
    var billvalue = document.querySelector('#sold');

    if (document.addbill.type.value == ("debit") ){
       billvalue.textContent = parseInt(billvalue.textContent)  + montantValue  ;

        }else{
  billvalue.textContent = +billvalue.textContent - montantValue  ;
         }
}
document.addbill.addEventListener("submit", handlebill)
Date.now
//new.Date().toLocaleDateString();

  function addBill() {
    var Trow = document.createElement("tr");
    var Tdate = document.createElement("td");
    Tdate.textContent = new Date().toLocaleDateString();
    Trow.appendChild(Tdate);
    var Treason = document.createElement("td");
    Treason.textContent = document.addbill.reason.value;
    Trow.appendChild(Treason);
    var Tamount = document.createElement("td");
    if (document.addbill.type.value == "debit") {
      Tamount.textContent = "-" + document.addbill.montant.valueAsNumber;
      Treason.classList.add("redclass");
    } else {
      Tamount.textContent = "+" + document.addbill.montant.valueAsNumber;
      Treason.classList.add("greenclass");
    }
    Trow.appendChild(Tamount);
  
    document.querySelector("table").appendChild(Trow);
  }
  
  function billtracker(e) {
    e.preventDefault();
    handlebill(e)
    addBill();
  }
  document.addbill.addEventListener("submit", billtracker);
