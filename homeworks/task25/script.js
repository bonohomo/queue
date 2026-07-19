let eml = document.forms.register.email;

        eml.addEventListener("input", function () {
            let email = eml.value;
            let regexp = /^[a-z0-9-.%_]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

            if (email === "" || regexp.test(email)) {
                eml.style.border = "";
            } else {
                eml.style.border = "2px solid red";
            }
        });