const textarea = document.querySelector("textarea"),
    filenameInput = document.querySelector(".file-name input"),
    selectMenu = document.querySelector(".select-menu select"),
    saveBtn = document.querySelector(".save-btn");

selectMenu.addEventListener("change", () => {
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text; // getting selected option text (select.options[index].text)
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

saveBtn.addEventListener("click", () => {
    const blob = new Blob([textarea.value], { type: selectMenu.value }),
        fileUrl = URL.createObjectURL(blob), // creates a string containing a URL representing the object given in the parameter.
        link = document.createElement("a"); // creating <a> tag

    link.download = filenameInput.value; // passing filename as download value of link
    link.href = fileUrl; // passing fileUrl as href value of link
    link.click(); // clicking link so the file download
    //<a download="filenameInput.value" href="blob:http://127.0.0.1:5500/5fcffe49-75cd-4f25-a71a-78fafa0bf092"></a>
})