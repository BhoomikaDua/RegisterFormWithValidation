$(document).ready(function() {
    var error = false;
    var errorMsg = '';

    $("#register").click(function() {
        validateForm();
        if (error) {
            $('form').submit(function(evt) {
                evt.preventDefault(); // to stop form submitting
            });
            $(".err").removeClass("hide");
            $(".err-msg").text(errorMsg);
            return;
        } else {
            errorMsg = '';
            $("#err").addClass("hide");
        }
        alert("REGISTRATION COMPLETE");
    });

    function validateForm() {
        let name = $('#name').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let confPassword = $('#repassword').val();

        if (name === '') {
            errorMsg = "First Name cannot be blank!";
            error = true;
            return;
        }
        if (email === '') {
            error = true;
            errorMsg = "Email cannot be blank!";
            return;
        }
        if (!validateEmail(email)) {
            error = true;
            errorMsg = "Invalid Email!";
            return;
        }
        if (password === '') {
            error = true;
            errorMsg = "Password cannot be blank!";
            return;
        }
        if (!validatePassword(password)) {
            error = true;
            errorMsg = "Password should have mininum 8 letters,a symbol, upper and lowercase letters and a number";
            return;
        }
        if (password !== confPassword) {
            error = true;
            errorMsg = "Password Does not match, Please try Again!";
            return;
        }


    }

    //min 8 letter password, with at least a symbol, upper and lower case letters and a number
    function validatePassword(str) {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(str);
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }



});