// Récupération du formulaire grâce à son ID.
const signupForm = document.getElementById('signupForm');


signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);

    // // On récupère chaque champs un à un grâce à leurs IDs.
    // const nameInput = document.getElementById("nom");
    // const emailInput = document.getElementById("email");
    // const phoneInput = document.getElementById("phone");
    // const passwordInput = document.getElementById("password");

    // // On crée une liste de clés valeurs pour récupérer les valeurs des champs récupérés ci-dessus.
    // const formData = {
    //     nom: nameInput.value,
    //     email: emailInput.value,
    //     phone: phoneInput.value,
    //     password: passwordInput.value,
    // }

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    // password 8 caracteres minimum , une lettre , un chiffre, un caractere special
    const passwordRegex = /"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/;

    let error = false;
    const userData = {};
    

    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        password: document.getElementById('passwordError'),
    }
    // formData.forEach((valeurDuChamp, nomDuChamp) => {})

    formData.forEach((valeur, index) => {
        if (!valeur) {
            error = true;
            errors[index].style.display = 'block';
        } else {
            if 
        
        }



    })

    if (!error) {
        /* It's sending the data to the server. */
        axios.post('http://212.83.176.255:3030', userData)
            // Récupération de la réponse en cas de succès.
            .then((response) => {
                console.log(response.data);
            // Récupération de l'error en cas d'erreur.
            }).catch((error) => {
                console.error(error);
            });
    }

    // if (formData.nom === '' || !emailRegex.test(formData.nom)) {
    //     evenement.preventDefault();
    //     alert("Entrer votre nom !");
    //     nameInput.focus();
    // }
    // else if (!formData.email || !emailRegex.test(formData.email)) {
    //     evenement.preventDefault();
    //     alert("Saisissez un numero de tél valide !");
    //     emailInput.focus();
    // }
    // else if (!formData.phone || !emailRegex.test(formData.phone)) {
    //     evenement.preventDefault();
    //     alert("Saisissez un numero de tél valide !");
    //     phoneInput.focus();
    // }
    // else if (!formData.password || !emailRegex.test(formData.password)) {
    //     evenement.preventDefault();
    //     alert("Entrer un mot de passe valide !");
    //     passwordInput.focus();
    // }

});

signupForm.addEventListener('reset', () => {

    signupForm.reset();
    nameInput.focus();

})