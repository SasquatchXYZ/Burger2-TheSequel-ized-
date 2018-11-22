$(function () {

    $('.eat-burger').on('click', function (event) {
        const id = $(this).data('id');
        console.log(id);

         logCustomer(id);
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

    function logCustomer(id) {
        $('#customer_modal').modal('show');
        $('#submit-customer').on('click', function(event) {
            const customer = $('#add-customer').val().trim();
            console.log(customer);

            const newCustomer = {
                customer_name: customer,
                burger_num: id
            };

            $.ajax('/api/customers', {
                type: 'POST',
                data: newCustomer
            }).then(function(results) {
                //console.log(results.burger_num);
                $.ajax(`/api/burgers/${results.burger_num}`, {
                    type: 'PUT',
                }).then(function () {
                    location.reload();
                });
            })
        });




    }
});