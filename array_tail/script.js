function generaArray() {
    const numeroElementi = parseInt(document.getElementById("numeroElementi").value);
    const array = [];

    for (let i = 0; i < numeroElementi; i++) {
      const numeroCasuale = Math.floor(Math.random() * 100) + 1;
      array.push(numeroCasuale);
    }

    const ultimiElementi = array.slice(-5); // Prendi gli ultimi 5 elementi dell'array

    const ultimiElementiList = document.getElementById("ultimiElementi");
    ultimiElementiList.innerHTML = ''; // Pulisci la lista

    for (const elemento of ultimiElementi) {
      const listItem = document.createElement("li");
      listItem.textContent = elemento;
      ultimiElementiList.appendChild(listItem);
    }
  }