// Ajoutez une validation de saisie à chaque champ en utilisant des expressions régulières (regex) pour vérifier que les données saisies sont valides. Par exemple, vérifiez que l'adresse électronique contient un "@" et un ".".
// Ajoutez des messages d'erreur pour chaque champ qui s'affichent lorsque la validation échoue. Utilisez CSS pour styliser ces messages d'erreur.
// Ajoutez une fonction JavaScript pour envoyer les données du formulaire lorsque tous les champs sont valides. Utilisez la fonction console.log() pour afficher les données dans la console du navigateur.
// Ajoutez un bouton de soumission de formulaire et une fonction JavaScript pour empêcher l'envoi des données tant que tous les champs ne sont pas valides.
// Ajoutez une fonction javascript pour effacer les champs du formulaire après l'envoi.
// Ajoutez un bouton de reset pour effacer les champs du formulaire.
const form = document.getElementById('form');

/* It's getting the form element. */
form.addEventListener('submit', (event) => {
    /* It's preventing the default behavior of the form. It's getting the form data. It's getting the
    error elements. It's creating the regexes. It's creating a variable to check if there is an
    error or not. It's creating an object to store the user data. It's checking if the value is
    empty or not. If it's empty, it's adding a data-error attribute to the element. If it's not
    empty, it's checking if the value is valid or not. If it's not valid, it's adding a data-error
    attribute to the element. If it's valid, it's removing the data-error attribute from the
    element. It's checking if there is an error or not. If there is no error, it's sending the data
    to the server. */
    event.preventDefault();

    /* It's getting the form data. */
    const formData = new FormData(form);

    /* It's getting the error elements. */
    const errors = {
        name: document.getElementById('nameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        password: document.getElementById('passwordError'),
    }

    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{5,20}$/;
    const nameRegex = /^[a-zA-Z ]+$/

    let error = false;

    const userData = {};

    /* It's checking if the value is empty or not. If it's empty, it's adding a data-error attribute to
    the element. If it's not empty, it's checking if the value is valid or not. If it's not valid,
    it's adding a data-error attribute to the element. If it's valid, it's removing the data-error
    attribute from the element. */
    formData.forEach((v, k) => {
        if (!v) {
            errors[k].setAttribute('data-error', true), error = true;
        } else {
            if (k === 'name' && !nameRegex.test(v)) {
                return errors[k].setAttribute('data-error', true), error = true;
            } else if (k === 'phone' && !phoneRegex.test(v)) {
                return errors[k].setAttribute('data-error', true), error = true;
            } else if (k === 'email' && !emailRegex.test(v)) {
                return errors[k].setAttribute('data-error', true), error = true;
            } else if (k === 'password' && !passwordRegex.test(v)) {
                return errors[k].setAttribute('data-error', true), error = true;
            }

            errors[k].setAttribute('data-error', false), error = false;
            userData[k] = v;
        }
    });

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

});