// Nayel function divisionWithout() // Not working //
// Change the logic 91 - 93

let hanr = document.getElementById('hanr');

let titles = [
	['Sum', 'sum', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Element 1 ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Element 2 ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'sum()'
		 	}
		]
	],
	['Substraction', 'substraction', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Element 1 ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Element 2 ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'substraction()'
		 	}
		]
	],
	['Multiply', 'multiply', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Element 1 ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Element 2 ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'multiply()'
		 	}
		]
	],	
	['Division With Leftover', 'divisionWith', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Element 1 ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Element 2 ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'divisionWith()'
		 	}
		]
	],
	['Division Without Leftover', 'divisionWithout', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Element 1 ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Element 2 ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'divisionWithout()'
		 	}
		]
	],
	['Fraction Sum', 'fractionSum', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Fraction 1 | write fraction with "/" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'text',
		 		placeholder:'Fraction 2 | write fraction with "/" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'fractionSum()'
		 	}
		]
	],
	['Fraction Subtraction', 'fractionSubstraction', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Fraction 1 | write fraction with "/" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'text',
		 		placeholder:'Fraction 2 | write fraction with "/" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'fractionSubstraction()'
		 	}
		]
	],
	['Fraction Multiply', 'fractionMultipy', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Fraction 1 | write fraction with "/" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'text',
		 		placeholder:'Fraction 2 | write fraction with "/" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'fractionMultipy()'
		 	}
		]
	],
	['Fraction division', 'fractionDivision', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Fraction 1 | write fraction with "/" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'text',
		 		placeholder:'Fraction 2 | write fraction with "/" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'fractionDivision()'
		 	}
		]
	],
	['Fraction Comparison', 'fractionComparison', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Fraction 1 | write fraction with "/" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'text',
		 		placeholder:'Fraction 2 | write fraction with "/" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'fractionComparison()'
		 	}
		]
	],
	['CM to Meter', 'cmToMeter', [
			{
				type:'input',
				input_type:'text',
				placeholder:'CM ',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'cmToMeter()'
		 	}
		]
	],
	['Meter to CM', 'meterToCm', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Meter ',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'meterToCm()'
		 	}
		]
	],
	['Percent', 'percent', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Number',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'Percent (don\'t write << % >>)',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'percent()'
		 	}
		]
	],
	['Decimal Fraction Raund', 'decimalFractionRound', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Number',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'decimalFractionRound()'
		 	}
		]
	],
	['Irregular Fraction to Mixed Number', 'IrrFractureToMixedNum', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Irregular Fracture ',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'IrrFractureToMixedNum()'
		 	}
		]
	],
	['Mixed umber To Irregular Fraction', 'mixedNumToIrrFracture', [
			{
				type:'input',
				input_type:'number',
				placeholder:'All part',
				class: 'inp_class2'
			},
		 	{
		 		type:'input',
		 		input_type:'Fracture',
		 		placeholder:'Percent (don\'t write << % >>)',
		 		class: 'inp_class2'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'mixedNumToIrrFracture()'
		 	}
		]
	],
	['Square', 'square', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Number',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'square()'
		 	}
		]
	],
	['Prime test', 'test_prime', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Number',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'test_prime()'
		 	}
		]
	],
	['component number analysis in simple numbers', 'BardToParz', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Number',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'BardToParz()'
		 	}
		]
	]
]


// res is a result's block
var res = document.getElementById("res_item");

// This block of code is adding elenents in dropdown
let div = document.getElementById('dropdownContent')
for (var i = 0; i < titles.length; i++) {
	elem = titles[i]
	let newElem = document.createElement('a')
	newElem.setAttribute('href', "#" + elem[0])
	newElem.setAttribute('onclick', 'runCode("' + elem[1] + '")')
	newElem.innerText = elem[0]
	div.appendChild(newElem)
}
// This block if for creating 
function runCode(data){
	let mainElem = titles.filter(elem => elem[1] == data)
	document.getElementById('result_block').innerText = ''
	mainElem[0][2].forEach(function(elem) {
		if(elem.type == 'input') {
			var newElem = document.createElement("input");
			newElem.setAttribute('type', elem.input_type);
			newElem.setAttribute('placeholder', elem.placeholder);
			newElem.setAttribute('class', elem.class)
			document.getElementById('result_block').appendChild(newElem)
			document.getElementById('h3').style.display = 'block';
		}else if (elem.type == 'button') {
			var newElem = document.createElement("input");
			newElem.setAttribute('type', elem.type);
			newElem.setAttribute('value', elem.value);
			newElem.setAttribute('class', elem.class);
			newElem.setAttribute('onclick', elem.onclick);
			document.getElementById('result_block').appendChild(newElem)
			document.getElementById('h3').style.display = 'block';
		}	
	});
}

// Sum, Suntraction, Multiply, DivisionWIth, DivisionWithout //
function sum(a, b) {
	// Function can pass 2 numbers
	// Returns summ of two or more elements
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = parseFloat(num1) + parseFloat(num2)
		return true
	}
}

function substraction(a, b) {
	// Function can pass 2 numbers
	// Returns summ of two or more elements
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = parseFloat(num1) - parseFloat(num2)
		return true
	}
}

function multiply(a, b) {
	// Function can pass 2 numbers
	// Returns summ of two or more elements
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = parseFloat(num1) * parseFloat(num2)
		return true
	}
}

function divisionWith(a,b){
	// Function can pass numbers like -> 20, 4, ...
	// Returns divison of two elements (with residue)
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = ((num1/num2).toString().split(".")[0] + " & " + (num1%num2))
		return true
	}
}

function divisionWithout(a, b) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns divison of two elements (without residue)
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = num1 / num2 
		return true
	}
}


function checkDivision(nmb, checkNmb) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns true if they can be divided fully
	if(checkNmb % nmb == 0){
		return true
	}else{
		return false
	}
}


// FRACTION //

function fractionSum(a, b) {
	// Function can pass string like -> '2/3'
	// Returns sum if a & b

 	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	var num1_ham = Number(num1.split('/')[0]);
	var num1_hay = Number(num1.split('/')[1]);
	var num2_ham = Number(num2.split('/')[0]);
	var num2_hay = Number(num2.split('/')[1]);
	if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return;
	}if (num1.includes('/') == false || num2.includes('/') == false) {
		alert("Please enter fraction with << / >>");
		return;
	}if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return;
	}if(num1_hay !== num2_hay){
		var result_haytarar = NOK(num1_hay, num2_hay);
		var result_hamarich = ((result_haytarar / num1_hay) * num1_ham) + ((result_haytarar / num2_hay) * num2_ham)
	}else{
		result_hamarich = num1_ham + num2_ham
		result_haytarar = num1_hay;
	}

	var result_num = (result_hamarich + '/' + result_haytarar);
	if (result_haytarar == result_hamarich) {
		result_num = result_hamarich;
	}

	res.innerText = "";
	res.innerText = result_num
	return true
}

function fractionSubstraction(a, b) {
 	// Function can pass string like -> '2/3'
 	// Returns substraction of a & b
 	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;

	var num1_ham = Number(num1.split('/')[0]);
	var num1_hay = Number(num1.split('/')[1]);
	var num2_ham = Number(num2.split('/')[0]);
	var num2_hay = Number(num2.split('/')[1]);
 	if (num1.includes('/') == false || num2.includes('/') == false) {
		alert("Please enter fraction with << / >>");
		return false
	}if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return false		
	}if(num1_hay !== num2_hay){
		var result_haytarar = NOK(num1_hay, num2_hay);
		var result_hamarich = ((result_haytarar / num1_hay) * num1_ham) - ((result_haytarar / num2_hay) * num2_ham)
	}if(num1_hay == num2_hay){
		result_haytarar = num1_hay
		console.log(result_haytarar)
		result_hamarich = num1_ham - num2_ham
		console.log(result_hamarich)
	}if((num1_ham * num2_hay) < (num2_ham * num1_hay)){
		alert("First fraction is bigger than second")
		return;
	}
		res.innerText = "";
		res.innerText = (result_hamarich + '/' + result_haytarar)
		return true
}

function fractionMultipy(a, b) {
 // Function can pass string like -> '2/3'
 // Returns Multiply of a & b
 	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;

	var num1_ham = Number(num1.split('/')[0]);
	var num1_hay = Number(num1.split('/')[1]);
	var num2_ham = Number(num2.split('/')[0]);
	var num2_hay = Number(num2.split('/')[1]);
 	if (num1.includes('/') == false || num2.includes('/') == false) {
		alert("Please enter fraction with << / >>");
		return false
	}else if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return false		
	}
	else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = (num1_ham * num2_ham) + '/' + (num1_hay * num2_hay)
		return true
	}
}

function fractionDivision(a, b) {
 // Function can pass string like -> '2/3'
 // Returns substraction of a & b
 	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	var num1_ham = Number(num1.split('/')[0]);
	var num1_hay = Number(num1.split('/')[1]);
	var num2_ham = Number(num2.split('/')[0]);
	var num2_hay = Number(num2.split('/')[1]);
 	if (num1.includes('/') == false || num2.includes('/') == false) {
		alert("Please enter fraction with << / >>");
		return false
	}else if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return false		
	}else{
		var res = document.getElementById("res_item");
		res.innerText = "";
		res.innerText = (num1_ham * num2_hay) + '/' + (num1_hay * num2_ham)
		return true
	}

}

function fractionComparison(a, b) {
	// Function can pass string like -> '2/3'
	// Returns True if a > b
 	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	var num1_ham = Number(num1.split('/')[0]);
	var num1_hay = Number(num1.split('/')[1]);
	var num2_ham = Number(num2.split('/')[0]);
	var num2_hay = Number(num2.split('/')[1]);
 	if (num1.includes('/') == false || num2.includes('/') == false) {
		alert("Please enter fraction with << / >>");
		return;
	}if (num1_hay == 0 || num2_hay == 0) {
		alert("Can't divide with 0");
		return;	
	}if(num1_ham * num2_hay > num2_ham * num1_hay){
		res.innerText = "";
		res.innerText = "Fraction 1 is greater than Fraction 2";
	}else if (num1_ham * num2_hay == num2_ham * num1_hay) {
		res.innerText = "";
		res.innerText = "Fraction 1 is equal to Fraction 2";		
	}else{
		res.innerText = "";
		res.innerText = "Fraction 1 is smaller than Fraction 2"
	}		
}


function cmToMeter(cm) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns meters from passed centimeters
	var cm = document.getElementsByClassName('inp_class')[0].value;
	res.innerText = "";
	res.innerText = cm / 100;
}

function meterToCm(meter) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns centimeters from passed meters
	var meter = document.getElementsByClassName('inp_class')[0].value;
	res.innerText = "";
	res.innerText = meter * 100;
}

function percent(num, perc){
	var num = document.getElementsByClassName('inp_class')[0].value;
	var percent = document.getElementsByClassName('inp_class')[1].value;
	res.innerText ="";
	res.innerText = num*percent/100;
}

function decimalFractionRound(num){
	var num = document.getElementsByClassName('inp_class')[0].value;
	res.innerText ="";
	res.innerText = Math.round(num)
}

function IrrFractureToMixedNum(num){
	var num = document.getElementsByClassName('inp_class')[0].value;
	var num_hamarich = Number(num.split('/')[0]);
	var num_haytarar = Number(num.split('/')[1]);
	allp = (num_hamarich/num_haytarar).toString();
	allPart = allp.split(".")[0];
	res.innerText = "";
	res.innerText = allPart + " & " + (num_hamarich - allPart * num_haytarar) + "/" + num_haytarar;
}

function mixedNumToIrrFracture(num, allPart){
	var allPart = document.getElementsByClassName('inp_class2')[0].value;
	var num = document.getElementsByClassName('inp_class2')[1].value;
	var num_hamarich = Number(num.split('/')[0]);
	var num_haytarar = Number(num.split('/')[1]);
	res.innerText = "";
	res.innerText = num_haytarar * allPart + num_hamarich + " / " + num_haytarar
}

function square(number){
	var num = document.getElementsByClassName('inp_class')[0].value;
	res.innerText = "";
	res.innerText = Math.sqrt(num);
}

function test_prime(number){
	var num = document.getElementsByClassName('inp_class')[0].value;
	//Function can test is number prime r not
	if (num===1){
		res.innerText = "";
		res.innerText = "false";
		return false;
  	}
  	else if(num === 2){
  		res.innerText = "";
  		res.innerText = "true"
    	return true;
  	}else{
    	for(var x = 2; x < num; x++){
      		if(num % x === 0){
      			res.innerText = "";
      			res.innerText = "false";
        		return false;
      		}
    	}
    	res.innerText = "";
    	res.innerText = "true"
    	return true;  
  	}
}

function BardToParz(){
	var num = document.getElementsByClassName('inp_class')[0].value;
	arr = [];
	var n = 2;
	if (test_prime(num) == true) {
		return num;
	}else{
		while(n <= num){
			if (num % n == 0) {
				arr.push(n);
				num = num / n;
				n = 2;
				console.log("first num  ",num);
				console.log("n  ",n);
				if (num / n == 1) {
					console.log(num);
					console.log(n);
					arr.push(n);
					break;
				}
			}
			n++;
			console.log("n++ ic hetoi   ",n)
		}

	}
	var str = "";
	res.innerText = "";
	for(elem of arr){
		str=str+elem+" ";
	}
	res.innerText=str;
}

// NOK // NOD // 
function NOD(n, m) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns GCD (Greatest Common Divisor)
	if(m > 0) { 
		let k = n % m;
		return NOD(m, k); 
	}else { 
		return Math.abs(n);  
	}
}

function NOK(x, y){
  return (x / NOD(x, y) | 0) * y;
}

function sameAnnouncement(a,b){
	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	var same = NOK(a_haytarar, b_haytarar);
	return same/a_haytarar*a_hamarich + same/b_haytarar*b_hamarich + " / " + same;
}







///////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////
// function mixedNumComparison(a_all,a,b_all,b){
// 	a_hamarich = a.split('/')[0]
// 	a_haytarar = a.split('/')[1]
// 	b_hamarich = b.split('/')[0]
// 	b_haytarar = b.split('/')[1]
// 	var a_frac = mixedNumToIrrFracture(a, a_all);
// 	var b_frac = mixedNumToIrrFracture(b, b_all);
// 	return fractionComparison(a_frac, b_frac);
// } console.log(mixedNumComparison(2,"3/4",3,"5/7"));
/////////////////////////////////////////////
////////////////////////////////////////
//////////////////////////////////////////


 
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function discriminant(a, b, c){
 // Function can pass 3 numbers
 // Returns number which is discriminant of theese numbers
 return (b ** 2) - (4 * a * c)
}

function largerRoot(a, b){
 // Function can pass 2 number
 // Returns number large root in square expression
 let result = discriminant(1, a, b)
 x = (-p + (result ** 0.5)) / 2
 return x
}

function smallerRoot(a, b){
 // Function can pass 2 numbers
 // Returns number small root in square expression
 let result = discriminant(1, a, b)
 x = (-p - (result ** 0.5)) / 2
 return x
}

function squareExperssion(a, b){
 // Function can pass 2 numbers
 // Returns array[] -> [smallRoot, largeRoot, Discriminant]
 let result = []
 let disc = parseFloat(discriminant(1, a, b))
 let smallRoot = parseFloat(smallerRoot(a, b))
 let largeRoot = parseFloat(largeRoot(a, b))
}

function linearExpression(problem){
 // X - ery
 let leftSideXTotal = 0
 let rightSideXTotal = 0
 // Azat andamnery
 let leftSideIntTotal = 0
 let rightSideIntTotal = 0

 problem = problem.replace(/\s/g,'')
 problem = problem.replace(/-/gi, "+-")
	
 let problemArray = problem.split("=")
 let problemLeftSide = problemArray[0]
 let problemRightSide = problemArray[1]
 let problemLeftSideValues = problemLeftSide.split("+");
 let problemRightSideValues = problemRightSide.split("+");
	
 for (var i = 0; i < problemLeftSideValues.length; i++) {
  let current = problemLeftSideValues[i];
  let currentValueLength = current.length;
		
  if (current.charAt(currentValueLength - 1) == "x") {
   current = current.split("x");
   leftSideXTotal = Number(leftSideXTotal) + Number(current[0]);
  }else {
   leftSideIntTotal = Number(leftSideIntTotal) + Number(problemLeftSideValues[i]);
  }
 }
 for (var i = 0; i < problemRightSideValues.length; i++) {
  var current = problemRightSideValues[i];
  var currentValueLength = current.length;
  if (current.charAt(currentValueLength - 1) == "x"){
   current = current.split("x");
   rightSideXTotal = Number(rightSideXTotal) + Number(current[0]);
  } else {
   rightSideIntTotal = Number(rightSideIntTotal) + Number(problemRightSideValues[i]);
  }
 }
 var totalXs = (leftSideXTotal - rightSideXTotal)
 var totalIntegers = (rightSideIntTotal - leftSideIntTotal)
 var solution = (totalIntegers / totalXs)

 return solution
}