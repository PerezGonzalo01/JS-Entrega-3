let tipoCambio = {
    USD: {
        EUR: 0.85,
        ARS: 750
    },
    EUR: {
        USD: 1.18,
        ARS: 370
    },
    ARS: {
        USD: 0.0029,
        EUR: 0.0027
    }
};

function convertirMoneda() {
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const deMoneda = document.getElementById("deMoneda").value;
    const aMoneda = document.getElementById("aMoneda").value;

    if (isNaN(cantidad)) {
        alert("Por favor, ingresa una cantidad válida.");
        return;
    }

    if (deMoneda === aMoneda) {
        document.getElementById("resultado").textContent = cantidad + " " + aMoneda;
        return;
    }

    const tasaCambio = tipoCambio[deMoneda][aMoneda];
    if (tasaCambio) {
        const convertido = cantidad * tasaCambio;
        document.getElementById("resultado").textContent = convertido.toFixed(2) + " " + aMoneda;
    } else {
        alert("No se encontró una tasa de cambio para la conversión seleccionada.");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchList = document.getElementById("searchList");
    const items = searchList.getElementsByTagName("li");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const text = item.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
});
let personaJSON = '{"nombre":"Gonzalo","edad":18,"ciudad":"BuenosAires"}';
let persona = JSON.parse(personaJSON);

console.log(persona.nombre);



