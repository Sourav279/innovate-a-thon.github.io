jQuery(document).ready(function () {
    $(function () {
        $('#defaultCountdown').countdown({ until: new Date(2023, 4, 10, 9) }); // year, month, date, hour
    });
});

