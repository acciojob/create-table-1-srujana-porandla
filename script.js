function insert_Row() {
    //Write your code here
	var t=document.getElementById("sampleTable");
	var newRow=t.insertRow(0);
	 var newCell1 = newRow.insertCell(0);
    var newCell2 = newRow.insertCell(1);
	newCell1.innerHTML = "New Cell1";
    newCell2.innerHTML = "New Cell2";
  
  
}
