// Récupération du formulaire grâce à son ID.
const signupForm = document.getElementById('signupForm');

// On récupère chaque champs un à un grâce à leurs IDs.
const nameInput = document.getElementById("nom");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

// On crée une liste de clés valeurs pour récupérer les valeurs des champs récupérés ci-dessus.
const formData = {
    nom: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value,
}



signupForm.addEventListener('submit', (evenement) => {

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/

    if (formData.nom === '' || emailRegex.test(formData.nom)) {
        evenement.preventDefault();
        alert("Entrer votre nom !");
        nameInput.focus();
    }
    else if (!formData.email || !emailRegex.test(formData.email)) {
        evenement.preventDefault();
        alert("Saisissez un numero de tél valide !");
        emailInput.focus();
    }
    else if (!formData.phone || !emailRegex.test(formData.phone)) {
        evenement.preventDefault();
        alert("Saisissez un numero de tél valide !");
        phoneInput.focus();
    }
    else if (!formData.password || !emailRegex.test(formData.password)) {
        evenement.preventDefault();
        alert("Entrer un mot de passe valide !");
        passwordInput.focus();
    }

})

signupForm.addEventListener('reset', () => {

    signupForm.reset();
    nameInput.focus();

})