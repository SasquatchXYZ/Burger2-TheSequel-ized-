$(function () {

    $('.eat-burger').on('click', function (event) {
        const id = $(this).data('id');
        console.log(id);

        logCustomer();
        /*$.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
        }).then(function () {
            location.reload();
        });*/
    });

    $('#submit-burger').on('click', function (event) {

        console.log('new Burger!');

        const newBurger = {
            burger_name: $('#add-burger').val().trim(),
            devoured: false
        };

        console.log(newBurger);

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added New Burger');
            location.reload()
        });
    });

    function logCustomer() {
        $('#customer_modal').modal('show');
        $('#add-customer').on('click'), function(event) {
            let customer =
        }
    }
});