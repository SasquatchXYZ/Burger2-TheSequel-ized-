$(function () {

    $('.eat-burger').on('click', function (event) {

        const id = $(this).data('id');
        console.log(id);

        //getCustomers();
        createCustomer(id);

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

    function createCustomer(id) {

        $('#customer_modal').modal('show');

        $('#submit-customer').on('click', function (event) {
            const customer = $('#add-customer').val().trim();
            //console.log(customer);

            const newCustomer = {
                customer_name: customer,
            };

            //console.log(newCustomer);

            $.ajax('/api/customers', {
                type: 'POST',
                data: newCustomer
            }).then(function (results) {
                //console.log(results.id);

                const assignCustomer = {
                    CustomerId: results.id
                };

                console.log(assignCustomer);

                $.ajax(`/api/burgers/${id}`, {
                    type: 'PUT',
                    data: assignCustomer
                }).then(function () {
                    //console.log(res);
                    location.reload();
                });

            })
        });
    }

    function getCustomers() {
        $.get('/api/customers', function(cust) {

            $('#customer_modal').modal('show')
        })
    }
});