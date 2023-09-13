const title = window.document.querySelector("title");
console.log(title);

const elemento = window.document.querySelector("h1")
console.log(elemento);

const aplicaFormato = () => {
    //const todosLosH1 = window.document.querySelectorAll("h1");
    const todosLosH1 = window.document.querySelectorAll(".formateable");

    todosLosH1.forEach(elemento => {
        console.log(elemento.textContent)
        //elemento.innerText = elemento.innerText.toUpperCase();
        elemento.innerHTML = "<p style='color:red'>" + elemento.innerHTML + "</p>"
    });
}
