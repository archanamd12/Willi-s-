function loadPets() {
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    let petList = document.getElementById("petList");
    petList.innerHTML = "";
    for (let i = 0; i < pets.length; i++) {
        petList.innerHTML += `<div class='pet'>
            <p><strong>${pets[i].name}</strong></p>
            <p>Type: ${pets[i].type}</p>
            <p>Weight: ${pets[i].weight} kg</p>
            <button onclick='adoptPet(${i})'>Adopt</button>
        </div>`;
    }
}

function addPet() {
    let name = document.getElementById("petName").value;
    let type = document.getElementById("petType").value;
    let weight = document.getElementById("petWeight").value;
    if (!name || !type || !weight) return;
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.push({ name, type, weight });
    localStorage.setItem("pets", JSON.stringify(pets));
    document.getElementById("petName").value = "";
    document.getElementById("petType").value = "";
    document.getElementById("petWeight").value = "";
    loadPets();
}

function adoptPet(index) {
    let pets = JSON.parse(localStorage.getItem("pets")) || [];
    pets.splice(index, 1);
    localStorage.setItem("pets", JSON.stringify(pets));
    loadPets();
}

window.onload = loadPets;