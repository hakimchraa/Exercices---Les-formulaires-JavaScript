const plats = document.querySelectorAll('li');


plats.forEach(plat => {
    plat.addEventListener('click', choisirPlat);

})

function choisirPlat() {
    this.dataset.choisi = this.dataset.choisi == "true" ? "false" : "true";
    calculNbrePlat();

}

function calculNbrePlat() {
    const nbrePlat = document.querySelectorAll('li[data-choisi="true"]').length;

    document.querySelector('#count').textContent = nbrePlat;
}

function calculCalories(){
const platsChoisis= Array.from(document.querySelectorAll('li[data-choisi="true"]'));

const totalCalories =  

}