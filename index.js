document.getElementById('dataForm').addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let feeling = document.getElementById('feelings').value;

    let tableBody = document.querySelector('#dataTable tbody');
    let newRow = tableBody.insertRow();
    
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);

    cell1.innerHTML = tableBody.rows.length;
    cell2.innerHTML = name;
    cell3.innerHTML = feeling;

    document.getElementById('dataForm').reset();

});