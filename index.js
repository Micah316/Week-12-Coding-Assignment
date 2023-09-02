
    let selectedRow = null;
    function onFormSubmit(e) {
        event.preventDefault();
        let formData = readFormData();
        if(selectedRow === null) {
            insertNewRecord(formData);
        }
        else{
            updateRecord(formData);
        }
    
        resetForm();
    }
    
    //URL is from local endpoint
    const URL_ENDPOINT = 'http://localhost:3000/gameList'

    //This is what will retrieve the data
    function readFormData() {
        let formData = {};
        formData["gamingCode"] = document.getElementById("gamingCode").value;
        formData["PlayStationProduct"] = document.getElementById("PlayStationProduct").value;
        formData["genre"] = document.getElementById("genre").value;
        formData["Price"] = document.getElementById("Price").value;
        return formData;
    }
    
    //This is the code used to allow a user to insert their data
    function insertNewRecord(data) {
        let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        let cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.gamingCode;
        let cell2 = newRow.insertCell(1); 
            cell2.innerHTML = data.PlayStationProduct;
        let cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.genre;
        let cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.Price;
        let cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<button onClick= 'onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
    }
    
    //This code allows the user to edit the data 
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById('gamingCode').value = selectedRow.cells[0].innerHTML; 
        document.getElementById('PlayStationProduct').value = selectedRow.cells[1].innerHTML;
        document.getElementById('genre').value = selectedRow.cells[2].innerHTML;
        document.getElementById('Price').value = selectedRow.cells[3].innerHTML;
    }
    
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.gamingCode;
        selectedRow.cells[1].innerHTML = formData.PlayStationProduct;
        selectedRow.cells[2].innerHTML = formData.genre;
        selectedRow.cells[3].innerHTML = formData.Price;
    }
    
    //This code allows the user to delete their data 
    function onDelete(td) {
        if(confirm('Would you like to delete the game information?')) {
            row = td.parentElement.parentElement;
            document.getElementById('storeList').deleteRow(row.rowIndex);
        }
        resetForm();
    }
    
    //This is the code for the data to be reset
    function resetForm() {
        document.getElementById('gamingCode').value = '';
        document.getElementById('PlayStationProduct').value = '';
        document.getElementById('genre').value = '';
        document.getElementById('Price').value = '';
    }
