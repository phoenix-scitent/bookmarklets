
(function($){
  var suffix = '_' + (parseInt(Math.random()*10000000)).toString(16);
  var formdata =
  {'name':'Society of Assocation',
   'contact_first_name':'Dude',
   'first_name':'Dude',
   'billing_first_name':'Dude',
   'contact_last_name':'Ranch',
   'last_name':'Ranch',
   'billing_last_name':'Ranch',
   'contact_phone':'5555555555',
   'addresses_attributes[0][address1]':'123 Somewhere',
   'billing_address':'123 Somewhere',
   'billing_city':'Somewhereville',
   'addresses_attributes[0][city]':'Somewhereville',
   'addresses_attributes[0][state]':'VA',
   'addresses_attributes[0][zipcode]':'12345',
   'addresses_attributes[0][country]':'United States',
   'user_pass-':'Password',
   'password':'Password',
   'user_pass_confirm-':'Password',
   'account_password':'Password',
   'institution':'Dudes United',
   'wpum_institution':'Dudes United'
  };
  for ( field in formdata ) {
    if(field.indexOf('addresses_attributes') !== -1) { continue; }
    $('[id^="'+field+'"').val(formdata[field] + suffix );
  }
  $('[id^="user_email"').val( suffix + '@dispostable.com' );
  $('[id^="username"').val( suffix + '@dispostable.com' );
  $('[id^="billing_email"').val( suffix + '@dispostable.com' );
  $('[id^="contact_email"').val( suffix + '@dispostable.com' );
  $('[id^="billing_postcode"').val( '12345' );
}(jQuery));