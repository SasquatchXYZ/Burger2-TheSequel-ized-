$(function () {

    $('.eat-burger').on('click', function (event) {

        const id = $(this).data('id');
        console.log(id);

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
        }).then(function () {
            location.reload();
        });

    });

    $('#submit-burger').on('click', function (event) {

        const newBurger = {
            burger_name: $('#add-burger').val().trim(),
            devoured: false
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            console.log('Added New Burger');
            location.reload()
        });

    });

    // -----------------------------------------------------------------------------------------------------------------
    // Associations Coding Below

    function logCustomer(id) {
        $('#customer_modal').modal('show');
        $('#submit-customer').on('click', function (event) {
            const customer = $('#add-customer').val().trim();
            console.log(customer);

            const newCustomer = {
                customer_name: customer,
                BurgerId: id
            };

            console.log(newCustomer);

            $.ajax('/api/customers', {
                type: 'POST',
                data: newCustomer
            }).then(function (results) {
                console.log(results);
                $.ajax(`/api/burgers/${results.BurgerId}`, {
                    type: 'PUT',
                    //data: results
                }).then(function () {
                    location.reload();
                });
            })
        });
    }

    function updateBurger() {

    }
});