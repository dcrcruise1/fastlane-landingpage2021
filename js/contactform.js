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

$(document).ready(function() {
    $("#lead-form").submit(function(event) {
        event.preventDefault();
        $("#lead-message").text("Sending Message...")
        var data = {
            firstname: $("#lead-firstname").val(),
            lastname: $("#lead-lastname").val(),
            email: $("#lead-email").val(),
            details: "Join Request with $50 Credit",
        }
        jQuery.post("/sendmail.php", data, function(response) {
            $("#lead-message").text(response)
        })
    });
});