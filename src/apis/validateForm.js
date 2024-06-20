function validateForm(data) {
    var error = 0;
    const serializedData = data; // Declare serializedData as a local variable
    console.log(serializedData);
    for (const key in serializedData) {
        console.log(key);
        if (serializedData[key] === "" || serializedData[key] === " ") {
            const labelElement = document.querySelector(`label[for="${key}"] span`);
            labelElement.style.display = "flex";
            //alert("Please fill out all fields.");
            error++;
        }
    }
    if (error === 0) {
        return true;
    } else {
        return false;
    }
}
