$(function() {

  var $form = $('.my-form-class');

  var validateForm = function() {
    var actualValue = $('input[name="some-text-field"]').val();
    var isChecked = $('input[name="some-checkbox"]').is(':checked');
    var selectedValue = $('input[name="some-radio-flyers"]:checked').val();

    if (actualValue === '5' && isChecked && selectedValue === "Frogs") {
      console.log('VALID');
    } else if (actualValue === '5' && isChecked){
      console.log('ERROR');
      alert('Please select the value "Frogs" (You selected "'
        + selectedValue+'")')
    } else if (actualValue === '5' && isChecked){
      console.log('ERROR')
      alert('Please check "Have you entered everything"')
    } else if (isChecked && selectedValue === "Frogs"){
      console.log('ERROR')
      alert('Please enter "5" in the text box (You entered "'
        + actualValue + '")')
    } else if (actualValue === 5){
      console.log('ERROR')
      alert('Please select the value "Frogs" (You selected "'
        + selectedValue + '"). Check "Have you entered everything"')
    } else if (isChecked){
      console.log('ERROR')
      alert('Please enter "5" in the text box (You entered "'
        + actualValue + '"). Select the value "Frogs" (You selected "'
        + selectedValue + '")')
    } else if (selectedValue === "Frogs"){
      console.log('ERROR')
      alert('Please enter "5" in the text box (You entered "'
        + actualValue + '"). Check "Have you entered everything"')
    } else {
      console.log("ERROR");
      alert('There was a problem with your request. Type "5" in the text box,'
        + ' select "Frogs", and check "Have you entered everything"');
    }
  };

  $form.on('submit', function(event) {
    event.preventDefault();
    validateForm();
  });


});
