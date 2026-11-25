function comptageTableau(){
    const lignes = document.querySelectorAll('.table-wrapper tbody tr');
const numero = document.querySelector('.card-nombres p');

numero.textContent = lignes.length
console.log(numero)
}


comptageTableau()








