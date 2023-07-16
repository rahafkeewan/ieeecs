function SetHeaderAnotherName() {
    let formHeader = document.querySelector(".form-header");
    let headerText = document.querySelector(".header-text");
    if(headerText.value != "" && headerText.value != undefined){
        formHeader.innerHTML = headerText.value;
    }
}