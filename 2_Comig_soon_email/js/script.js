// Imported jQuery

// Button on click, perform validation and change text
$('.submit_img').on('click', function() {
    var emailText = $('#emailInput').val();
    if (isValidEmail(emailText)) {
        $('.form-errorText').css('display', 'none');
        $('.form-okText').css('display', 'block');
        document.getElementById("nesto").reset();


    } else {
        $('.form-errorText').css('display', 'block');
        $('.form-okText').css('display', 'none');
        /* document.getElementById("nesto").reset(); */
        $('#emailInput').attr('placeholder', '');
        $('#emailInput').focus(function() {
            $('.form-errorText').hide();
        });

    }
});


function isValidEmail(emailText) {
    var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpr.test(emailText);
}