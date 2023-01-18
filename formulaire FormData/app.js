const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);



    let error = false;

    const errors = {
        firstName: document.getElementById('firstNameError'),
        lastName: document.getElementById('lastNameError'),
        email: document.getElementById('emailError'),
        phone: document.getElementById('phoneError'),
        message: document.getElementById('messageError')
    }

    const emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    const nameRegex = /^[a-zA-Z ]+$/;
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

    formData.forEach((valeurDuChamp, nomDuChamp) => {
        if (!valeurDuChamp) {
            error = true;
            errors[nomDuChamp].style.display = 'block';
        } else {
            if ((nomDuChamp ==='firstName' || nomDuChamp ==='lastName') && !nameRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp ==='email' && !emailRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp === 'phone' && !phoneRegex.test(valeurDuChamp)) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            } else if (nomDuChamp === 'message' && valeurDuChamp.length < 4) {
                error = true;
                return errors[nomDuChamp].style.display = 'block';
            }

            error = false;
            errors[nomDuChamp].style.display = 'none';
        }
    });

    if (!error) {
        console.log(formData)
        contactForm.reset();
    }
});