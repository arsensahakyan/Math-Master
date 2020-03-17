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
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],
	['Dividing', 'dividin', [
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
		 		onclick: 'divide()'
		 	}
		]
	],

]

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


function sum(a, b) {
	// Function can pass 2 numbers
	// Returns summ of two or more elements
	var num1 = document.getElementsByClassName('inp_class')[0].value;
	var num2 = document.getElementsByClassName('inp_class')[1].value;
	if (num1 == "" || num2 == "") {
		alert("Please enter valid value !!!");
		return false
	}else{
		var newElem = document.createElement("h3");
		newElem.innerText = parseFloat(num1) + parseFloat(num2)
		document.getElementById("res_bl").appendChild(newElem)
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
		var newElem = document.createElement("h3");
		newElem.innerText = parseFloat(num1) - parseFloat(num2);
		document.getElementById("res_bl").appendChild(newElem)
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
		var newElem = document.createElement("h3");
		newElem.innerText = parseFloat(num1) * parseFloat(num2);
		document.getElementById("res_bl").appendChild(newElem)
		return true
	}
}

function fractionSubstraction(a, b) {
 // Function can pass string like -> '2/3'
 // Returns substraction of a & b

 a_hamarich = a.split('/')[0]
 a_haytarar = a.split('/')[1] 
 b_hamarich = b.split('/')[0]
 b_haytarar = b.split('/')[1]

 if(a_haytarar != b_haytarar){
  result_haytarar = nok(a_haytarar, b_haytarar)
  result_hamarich = ((result_haytarar / a_haytarar) * a_hamarich) - ((result_haytarar / b_haytarar) * b_hamarich)
 }else{
  result_haytarar = a_haytarar
  result_hamarich = a_hamarich + b_hamarich
  return result_hamarich + '/' + result_haytarar
 }

}

function fractionMultipy(a, b) {
 // Function can pass string like -> '2/3'
 // Returns Multiply of a & b

 a_hamarich = a.split('/')[0]
 a_haytarar = a.split('/')[1]
 b_hamarich = b.split('/')[0]
 b_haytarar = b.split('/')[1]

 return (a_hamarich * b_hamarich) + '/' + (a_haytarar * b_haytarar)
}

function fractionDivision(a, b) {
 // Function can pass string like -> '2/3'
 // Returns substraction of a & b

 a_hamarich = a.split('/')[0]
 a_haytarar = a.split('/')[1]
 b_hamarich = b.split('/')[0]
 b_haytarar = b.split('/')[1]

 return (a_hamarich * b_haytarar) + '/' + (a_haytarar * b_hamarich)
}


function divisionWithout(a, b) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns divison of two elements (without residue)
	return parseInt( a / b )
}

function divisionWith(a,b){
	// Function can pass numbers like -> 20, 4, ...
	// Returns divison of two elements (with residue)
	return ((a/b).toString().split(".")[0] + " & " + (a%b));
}

function cmToMeter(cm) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns meters from passed centimeters
	return cm / 100
}

function meterToCm(meter) {
	// Function can pass numbers like -> 20, 4, ...
	// Returns centimeters from passed meters
	return cm * 100
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


function checkEqualFraction(a, b) {
	// Function can pass string like -> '2/3'
	// Returns true if they are equal

	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	if(a_hamarich / b_hamarich == a_haytarar / b_haytarar){
		return true
	}else{
		return false
	}
}

function fractionDivision(a,b){
	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	return a_hamarich*b_haytarar + " / " + a_haytarar*b_hamarich;
}


function percent(num, perc){
	return num*perc/100;
}

function decimalFractionRound(num){
	return Math.round(num);
}

function fractionComparison(a, b) {
	// Function can pass string like -> '2/3'
	// Returns True if a > b

	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	if(a_hamarich * b_haytarar > b_hamarich * a_haytarar){
		return true
	}else{
		return false
	}
}

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

function IrrFractureToMixedNum(num){
	num_hamarich = Number(num.split('/')[0]);
	num_haytarar = Number(num.split('/')[1]);
	allp = (num_hamarich/num_haytarar).toString();
	allPart = allp.split(".")[0];
	return allPart + " ամբողջ " + (num_hamarich - allPart * num_haytarar) + "/" + num_haytarar;
}

function mixedNumToIrrFracture(num, allPart){
	num_hamarich = Number(num.split('/')[0]);
	num_haytarar = Number(num.split('/')[1]);
	return num_haytarar * allPart + num_hamarich + " / " + num_haytarar;
}

function sameAnnouncement(a,b){
	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	var same = NOK(a_haytarar, b_haytarar);
	return same/a_haytarar*a_hamarich + same/b_haytarar*b_hamarich + " / " + same;
}

function fractionSum(a, b) {
	// Function can pass string like -> '2/3'
	// Returns sum if a & b

	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]

	if(a_haytarar != b_haytarar){

	}else{
		result_hamarich = a_hamarich + b_hamarich
		result = "a_hamarich "
	}

}

function square(number){
	return Math.sqrt(nuumber);
}

function test_prime(number){
	//Function can test is number prime r not
	if (number===1){
		return false;
  	}
  	else if(number === 2){
    	return true;
  	}else{
    	for(var x = 2; x < number; x++){
      		if(number % x === 0){
        		return false;
      		}
    	}
    	return true;  
  	}
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

function bardToParz(a){
 // Functions can pass 1 number
 // Returns array[] of numbers (parz).
 let arr = []
 let checkArr = []
 for (var i = 2; i <= a; i++) {
  if(test_prime(i)){
   checkArr.push(i)
  }
 }
 console.log(checkArr)
 let current = a
 if(test_prime(a)){
  return [1]
 }else{
  while (current != 1) {
   for (var i = 0; i < checkArr.length; i++) {
    let elem = checkArr[i]
    if(current % elem == 0){
     current = current / elem
     arr.push(elem)
     break;
    }
   }
  }
 }
 return arr
}



function BardToParz2byme(num){
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
	return arr;
}// console.log(BardToParz2byme(30))
 
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

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
