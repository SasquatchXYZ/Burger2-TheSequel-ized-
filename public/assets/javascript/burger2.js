$(function () {

  $('.eat-burger').on('click', function (event) {

    const id = $(this).data('id');
    console.log(id);

    createCustomer(id);
    // getCustomers();

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
    $.ajax('/api/customers', {
      type: 'GET'
    }).then(function(custArray) {
      console.log(custArray);
      $('#customer_modal').modal('show')
    })
  }
});