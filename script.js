const choose_weight = document.getElementById('choose_weight');
const weight_value = document.getElementById('weight_value');
const oz_result = document.getElementById('oz_result');
const kg_result = document.getElementById('kg_result');
const Change_Pounds = document.getElementById('Change_Pounds');
const Change_Kilos = document.getElementById('Change_Kilos');
const Change_Grams = document.getElementById('Change_Grams');
const Change_Ounces = document.getElementById('Change_Ounces');
const result = document.getElementById('result');

const result_array = ['lb_result', 'kg_result', 'gm_result', 'oz_result'];
let weight = 0;

// Hide input box and result box
weight_value.style.visibility = 'hidden';
result.style.visibility = 'hidden';

// for change in select box
choose_weight.addEventListener('change', (e) => {
  // Show input box and result_box
  weight_value.style.visibility = 'visible';
  result.style.visibility = 'visible';
  //current selected option values
  let given_value = e.target.value;
  // Hide selected result_box and display the rest
  if(given_value === '1') {
    weight = 1;
    hideResult_box('kg_result');
  }
  if(given_value === '2') {
    weight = 2;
    hideResult_box('lb_result');
  }
  if(given_value === '3') {
    weight = 3;
    hideResult_box('gm_result');
  }
  if(given_value === '4') {
    weight = 4;
    hideResult_box('oz_result');
  }
});

// Updates converted values on input
weight_value.addEventListener('input', (e) => {
  let given_value = e.target.value;
  convert(weight, given_value);
});

// Hides currently selected result_list
function hideResult_box(result_box) {
  for(var i=0; i < result_array.length; i++) {
    if(result_array[i] === result_box) {
      let match = result_array[i];
      document.getElementById(match).style.display = 'none';
    } else {
      document.getElementById(result_array[i]).style.display = 'block';
    }
  }
  updateValues();
}

// function used only with hide_Result_box function
function updateValues() {
  let given_value = weight_value.value;
  convert(weight, given_value);
}

function convert(weight, given_value) {
  switch(weight) {
    case 1: // Kilos change..
      Change_Pounds.innerHTML = (given_value*2.2046).toFixed(2);
      Change_Grams.innerHTML = given_value*1000;
      Change_Ounces.innerHTML = (given_value*35.274).toFixed(2);
      break;
    case 2: // Pounds change..
      Change_Kilos.innerHTML = (given_value/2.2046).toFixed(2);
      Change_Grams.innerHTML = (given_value/0.0022046).toFixed(2);
      Change_Ounces.innerHTML = given_value*16;
      break;
    case 3: // Grams change..
      Change_Kilos.innerHTML = given_value/1000;
      Change_Pounds.innerHTML = given_value/500;
      Change_Ounces.innerHTML = (given_value*0.035274).toFixed(4);
      break;
    case 4: // Ounces change..
      Change_Kilos.innerHTML = (given_value/35.274).toFixed(3);
      Change_Pounds.innerHTML = (given_value*0.062500).toFixed(3);
      Change_Grams.innerHTML = (given_value/0.035274).toFixed(4);
      break;
  }
}