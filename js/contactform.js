$(document).ready(function() {
    $("#contactform").submit(function(event) {
        event.preventDefault();
        $("#message").text("Sending Message...")
        var data = {
            firstname: $("#firstname").val(),
            lastname: $("#lastname").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            interest: $("#interest").val(),
            details: $("#details").val(),
        }
        jQuery.post("/sendmail.php", data, function(response) {
            $("#message").text(response)
        })
    });
});