let pLevel = prompt("Livello difficoltà (1-3):")


let cells_container = document.querySelector (".container") 


if (pLevel == 1) {
    for (let i = 1; i <= 100; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'cella'
        myDiv.append(i)
        cells_container.append(myDiv)
        cells_container.style.width = '1000px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })

    console.log("cella")
    }
}else if (pLevel == 2 ){
    for (let i = 1; i <= 81; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'cella'
        myDiv.append(i)
        cells_container.append(myDiv)
        cells_container.style.width = '900px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })



        console.log("cella")
    }
}else if (pLevel == 3 ){
    for (let i = 1; i <= 49; i++) {
        let myDiv = document.createElement("div")
        myDiv.className = 'cella'
        myDiv.append(i)
        cells_container.append(myDiv)
        cells_container.style.width = '700px'
        myDiv.addEventListener('click', function () {
        this.style.backgroundColor = 'blue'
        })



        console.log("cella")
    }
}