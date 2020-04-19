/* Email Regex */
function isValidEmail(emailText) {
    var regExpr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regExpr.test(emailText);
}




$('#submit_btn').on('click', function() {
    console.log("OK");
    var emailText = $('#email').val();

    if (isValidEmail(emailText)) {
        $('.error_svg, .error_msg').css('display', 'none');
        /*     document.getElementById("formica").reset(); */

    } else {
        $('.error_svg, .error_msg').css('display', 'block');
        $("#name, #lastName, #email, #password").addClass("input_error_border");

        /* document.getElementById("nesto").reset(); */
        /* $('#email').attr('placeholder', ''); */
        /*      $('#email').focus(function() {
                 $('.form-errorText').hide();
             }); */

    }
});