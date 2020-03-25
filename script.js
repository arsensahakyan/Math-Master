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
	['Mixed number To Irregular Fraction', 'mixedNumToIrrFracture', [
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
	['Degree', 'degree', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter number',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'Fracture',
		 		placeholder:'Enter degree',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'degree()'
		 	}
		]
	],
	['Root', 'square', [
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
	['Square of number', 'numSqr', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter number',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'numSqr()'
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
	['Component number analysis in simple numbers', 'BardToParz', [
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
	],
	['Quadratic equation', 'squareExperssion', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Value: A',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'Value: B',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'Value: C',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'squareExperssion()'
		 	}
		]
	],

	['Sum of Vectors', 'vectorSum', [
			{
				type:'input',
				input_type:'text',
				placeholder:'Vector 1 seperate x & y "\,"',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'text',
				placeholder:'Vector 2 seperate x & y "\,"',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'vectorSum()'
		 	}
		]
	],
	['GCD (Greatest Common Divisor)', 'GcdPrint', [
			{
				type: 'input',
				input_type: 'number',
				placeholder: 'Number 1',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'Number 2',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'GcdPrint()'
		 	}
		]
	],
	['GCF (Greatest Common Factor)', 'NOKPrint', [
			{
				type: 'input',
				input_type: 'number',
				placeholder: 'Number 1',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'Number 2',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'NOKPrint()'
		 	}
		]
	],

	['Square Of Sum', 'squareOfSum', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'squareOfSum()'
		 	}
		]
	],
	['Square Of Subtraction', 'squareOfSub', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'squareOfSub()'
		 	}
		]
	],
	['Subtraction of squares', 'subOfSquare', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'subOfSquare()'
		 	}
		]
	],
	['Cube of sum', 'cubeOfSum', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'cubeOfSum()'
		 	}
		]
	],
	['Cube of Subtraction', 'cubeOfSub', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'cubeOfSub()'
		 	}
		]
	],
	['Sum Of Cube', 'sumOfCub', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'sumOfCub()'
		 	}
		]
	],
	['Subtraction Of Cube', 'subOfCub', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of "a" ',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of "b" ',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'subOfCub()'
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
	['Kg To G', 'kgToG', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter kg',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'kgToG()'
		 	}
		]
	],
	['G to Kg', 'gToKg', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter g',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'gToKg()'
		 	}
		]
	],
	['Second To Min', 'secToMin', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter second',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'secToMin()'
		 	}
		]
	],
	['Min To Seconds', 'minToSec', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter minute',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'minToSec()'
		 	}
		]
	],
	['Hour To Min', 'hourToMin', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter hour',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'hourToMin()'
		 	}
		]
	],
	['Hour To Seconds', 'hourToSec', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter hour',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'hourToSec()'
		 	}
		]
	],
	['Days To Hour', 'daysToHour', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter days',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'daysToHour()'
		 	}
		]
	],
	['Days To Min', 'daysToMin', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter days',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'daysToMin()'
		 	}
		]
	],
	['Circle Area', 'circleArea', [
			{
				type: 'input',
				input_type: 'number',
				placeholder: 'Cicle radius (cm)',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'circleArea()'
		 	}
		]
	],
	['Circle Radius', 'circleRadius', [
			{
				type: 'input',
				input_type: 'number',
				placeholder: 'Cicle diameter (cm)',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'circleRadius()'
		 	}
		]
	],
	['Area of triangle', 'triangleArea', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Triangle base (cm)',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'Triangle height (cm)',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'triangleArea()'
		 	}
		]
	],
	['Perimter of triangle', 'trianglePerimetr', [
			{
				type:'input',
				input_type:'number',
				placeholder:'A side',
				class: 'inp_class'
			}, 
			{
				type:'input',
				input_type:'number',
				placeholder:'B side',
				class: 'inp_class'
			},
			{
				type:'input',
				input_type:'number',
				placeholder:'C side',
				class: 'inp_class'
			},
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'trianglePerimetr()'
		 	}
		]
	],
	['Find angel of triangle (AAA)', 'AAA', [
		   	{
		    	type: 'input',
		    	input_type: 'number',
		    	placeholder: 'Angle: A',
		    	class: 'inp_class'
		   	}, 
		   	{
		    	type: 'input',
		    	input_type: 'number',
		    	placeholder: 'Angle: B',
		    	class: 'inp_class'
		   	},
		    {
		     	type:'button',
		     	value:'Submit',
		     	class:'btn_class',
		     	onclick: 'AAA()'
		    }
  		]
 	],
 	['Find angel of triangle (AAS)', 'AAS', [
		   	{
		    	type: 'input',
		    	input_type: 'number',
		    	placeholder: 'Angle: A',
		    	class: 'inp_class'
		   	}, 
		   	{
		    	type: 'input',
		    	input_type: 'number',
		    	placeholder: 'Angle: B',
		    	class: 'inp_class'
		   	},
		   	{
		    	type: 'input',
		    	input_type: 'number',
		    	placeholder: 'Side: a',
		    	class: 'inp_class'
		   	},
		    {
			    type:'button',
			    value:'Submit',
			    class:'btn_class',
			    onclick: 'AAS()'
		    }
	  	]
 	],
	['Force (F)', 'force', [
			{
				type:'input',
				input_type:'number',
				placeholder:'Enter m',
				class: 'inp_class'
			}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'force()'
		 	}
		]
	],
	['Speed (V)', 'speed', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of S',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of t',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'speed()'
		 	}
		]
	],
	['Road (S)', 'road', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of V',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of t',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'road()'
		 	}
		]
	],
	['Density (P)', 'density', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of m',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of V',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'density()'
		 	}
		]
	],
	['Power (d)', 'power', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of work(A)',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of time(t)',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'density()'
		 	}
		]
	],
	['Work (A)', 'work', [
			{
				type:'input',
				input_type:'number',
				placeholder:'value of power(d)',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'value of time(t)',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'work()'
		 	}
		]
	],
	['Pressure (p)', 'pressure', [
			{
				type:'input',
				input_type:'number',
				placeholder:'force(f)',
				class: 'inp_class'
			},
		 	{
		 		type:'input',
		 		input_type:'number',
		 		placeholder:'touch surface area (S)',
		 		class: 'inp_class'
		 	}, 
		 	{
		 		type:'button',
		 		value:'Submit',
		 		class:'btn_class',
		 		onclick: 'pressure()'
		 	}
		]
	],

];

var res = document.getElementById("res_item")
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

let aboutUsButton = document.getElementById("aboutBtn")
let aboutUsBlock = document.getElementById('about-us')

aboutUsButton.addEventListener('click', function (){
	document.getElementById("main").style.display = 'none';
	aboutUsBlock.style.display = 'block';
})

document.getElementById('homeBtn').addEventListener('click', function (){
	aboutUsBlock.style.display = 'none';
	document.getElementById("main").style.display = 'flex';
})

document.getElementById('homeLogo').addEventListener('click', function (){
	aboutUsBlock.style.display = 'none';
	document.getElementById("main").style.display = 'flex';
})


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
	var res = document.getElementById("res_item");
	var num = document.getElementsByClassName('inp_class')[0].value;
	//Function can test is number prime r not
	if (num===1){d
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
				if (num / n == 1) {
					arr.push(n);
					break;
				}
			}
			n++;
		}

	}
	var str = "";
	res.innerText = "";
	for(elem of arr){
		str = str + elem + " ";
	}
	res.innerText = str;
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
 // Function can pass numbers like -> 20, 4, ...
 // Returns GCF (Greatest Common Factor)
 return (x / NOD(x, y) | 0) * y;
}
function NOKPrint(){
	var x = document.getElementsByClassName('inp_class')[0].value
 	var y = document.getElementsByClassName('inp_class')[1].value
 	let res = document.getElementById('res_item')
 	res.innerText = "";
 	res.innerText = 'GCF -> ' +  NOK(x, y)
}

function GcdPrint(n, m){
	var n = document.getElementsByClassName('inp_class')[0].value
	var m = document.getElementsByClassName('inp_class')[1].value
	let res = document.getElementById('res_item')
	let output = NOD(n, m)
	res.innerText = "";
 	res.innerText = 'GCD -> ' + output
}

function sameAnnouncement(a,b){
	a_hamarich = a.split('/')[0]
	a_haytarar = a.split('/')[1]
	b_hamarich = b.split('/')[0]
	b_haytarar = b.split('/')[1]
	var same = NOK(a_haytarar, b_haytarar);
	return same/a_haytarar*a_hamarich + same/b_haytarar*b_hamarich + " / " + same;
}

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

function largerRoot(a, b, c){
 // Function can pass 2 number
 // Returns number large root in square expression
 let result = discriminant(a, b, c)
 x = (-a + (result ** 0.5)) / 2
 return x
}

function smallerRoot(a, b, c){
 // Function can pass 2 numbers
 // Returns number small root in square expression
 let result = discriminant(a, b, c)
 x = (-a - (result ** 0.5)) / 2
 return x
}

function squareExperssion(a, b){
 // Function can pass 2 numbers
 // Returns array[] -> [smallRoot, largeRoot, Discriminant]
 var a = document.getElementsByClassName('inp_class')[0].value;
 var b = document.getElementsByClassName('inp_class')[1].value;
 var c = document.getElementsByClassName('inp_class')[2].value;
 var res = document.getElementById("res_item");
 let result = []
 if(a == '' || b == '' || c == ''){
 	alert('Please enter all parameters')
 	return;
 }
 let disc = discriminant(a, b, c)
 let smallRoot = smallerRoot(a, b, c)
 let largeRoot = largerRoot(a, b, c)
 res.innerText = "";
 res.innerText = 'Roots: ' + smallRoot + ' & ' + largeRoot + ' | Discriminant: ' + disc

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

function triangleArea(h, n){
	var h = document.getElementsByClassName('inp_class')[0].value;
	var n = document.getElementsByClassName('inp_class')[1].value;
	var res = document.getElementById("res_item");
	res.innerText = ''
	res.innerText = (h * n) * 0.5 + ' cm^2'
}

function trianglePerimetr(a, b, c){
	var a = document.getElementsByClassName('inp_class')[0].value;
	var b = document.getElementsByClassName('inp_class')[1].value;
	var c = document.getElementsByClassName('inp_class')[2].value;
	var res = document.getElementById("res_item");
	res.innerText = ''
	res.innerText = parseFloat(a) + parseFloat(b) + parseFloat(c)
}

function vectorSum(vect1, vec2){
	// Function can pass two arrays[[x1, y1], [x2, y2]]
	var a = document.getElementsByClassName('inp_class')[0].value.split(',');
	var b = document.getElementsByClassName('inp_class')[1].value.split(',');
	var res = document.getElementById("res_item");

	res.innerText = ''
	res.innerText = 'x: ' + (parseFloat(a[0]) + parseFloat(b[0])) + ' | y: ' + (parseFloat(a[1]) + parseFloat(b[1]))
}

function circleArea(r){
	// Function can pass radius of circle
	// Returns area (cm^2)
	var r = document.getElementsByClassName('inp_class')[0].value;
	var res = document.getElementById("res_item");
	if(r == ''){
		alert('Please enter correct values')
		return;
	}
	res.innerText = ''
	res.innerText = 'Area: ' + (Math.PI * (r ** 2)) + 'cm'+ '^2'
}

function circleRadius(t){
	// Function can pass radius of circle
	// Returns area (cm^2)
	var t = document.getElementsByClassName('inp_class')[0].value;
	var res = document.getElementById("res_item");
	if(t == ''){
		alert('Please enter correct values')
		return;
	}
	res.innerText = ''
	res.innerText = 'Radius: ' + t/2 + ' cm'
}

function squareOfSum(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = (num1*num1)+(2*num1*num2)+(num2*num2);
	res.innerText = "";
	res.innerText = "(" + num1 + "+" + num2 + ")^2= " + num1 + "^2" + " + "+ "2*"+num1+"*"+num2 + " + "+num2+"^2 " + " = "+ result;
}

function squareOfSub(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = (num1*num1)-(2*num1*num2)+(num2*num2);
	res.innerText = "";
	res.innerText = "(" + num1 + "+" + num2 + ")^2= " + num1 + "^2" + " - "+ "2*"+num1+"*"+num2 + " + "+num2+"^2 " + " =  "+ result;
}

function subOfSquare(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = (num1-num2)*(num1+num2);
	res.innerText = '';
	res.innerText = num1+"^2 - "+num2+"^2 = ("+num1+"+"+num2+")("+num1+"-"+num2+") = "+result;
}

function cubeOfSum(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = Math.pow(num1+num2,3);
	res.innerText = '';
	res.innerText = num1+'^3 '+' + '+num2+'^3 = '+num1+'^3'+' + 3*'+num1+'^2'+'*'+num2+' + 3*'+num1+'*'+num2+'^2'+' + '+num2+'^3 = '+result;
}

function cubeOfSub(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = Math.pow(num1-num2,3);
	res.innerText = '';
	res.innerText = num1+'^3 '+' - '+num2+'^3 = '+num1+'^3'+' + 3*'+num1+'^2'+'*'+num2+' + 3*'+num1+'*'+num2+'^2'+' - '+num2+'^3 = '+result;
}

function sumOfCub(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = Math.pow(num1,3) + Math.pow(num2,3);
	res.innerText = '';
	res.innerText = num1+'^3 - '+num2+'^3 = '+'('+num1+'+'+num2+') ('+num1+'^2 - '+num1+'*'+num2+'+'+num2+'^2 ) = '+result;
}

function subOfCub(){
	var num1 = Number(document.getElementsByClassName('inp_class')[0].value);
	var num2 = Number(document.getElementsByClassName('inp_class')[1].value);

	if (num1 == '' || num2 =='') {
		alert('Please enter all parameters ...');
	}
	var result = Math.pow(num1,3) - Math.pow(num2,3);
	res.innerText = '';
	res.innerText = num1+'^3 - '+num2+'^3 = '+'('+num1+'-'+num2+') ('+num1+'^2 - '+num1+'*'+num2+'+'+num2+'^2 ) = '+result;
}

function kgToG(){
	var kg = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = kg*1000;
}

function gToKg(){
	var g = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = g * 1000;
}

function hourToMin(){
	var hour = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = hour * 60;
}

function hourToSec(){
	var hour = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = hour * 3600;
}

function minToSec(){
	var min = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = min / 60;
}

function secToMin(){
	var sec = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = sec / 60;
}

function daysToHour(){
	var days = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = days * 24;
}

function daysToMin(){
	var min = Number(document.getElementsByClassName('inp_class')[0].value);
	res.innerText = '';
	res.innerText = min * 1440;
}

function force(){
	var m = Number(document.getElementsByClassName('inp_class')[0].value);
	var result = m * 9.8;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'f = m * g = '+m+' * '+'9.8'+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'V = S / t = '+s+' * '+t+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'V = S / t = '+s+' * '+t+' = '+result+' ~ '+Math.round(result);
		}	
	}
}

function speed(){
	var s = Number(document.getElementsByClassName('inp_class')[0].value);
	var t = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = s / t;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'V = S / t = '+s+' / '+t+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'V = S / t = '+s+' / '+t+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'V = S / t = '+s+' / '+t+' = '+result+' ~ '+Math.round(result);
		}	
	}	
}

function road(){
	var v = Number(document.getElementsByClassName('inp_class')[0].value);
	var t = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = v * t;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'S = V * t = '+v+' * '+t+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'S = V * t = '+v+' * '+t+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'S = V * t = '+s+' * '+t+' = '+result+' ~ '+Math.round(result);
		}	
	}	
}

function density(){
	var m = Number(document.getElementsByClassName('inp_class')[0].value);
	var v = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = m / v;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'P = m / V = '+m+' / '+v+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'P = m / V = '+m+' * '+v+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'P = m / V = '+m+' * '+v+' = '+result+' ~ '+Math.round(result);
		}	
	}
}

function power(){
	var a = Number(document.getElementsByClassName('inp_class')[0].value);
	var t = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = a / t;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'N = A / t = '+a+' / '+t+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'N = A / t = '+a+' * '+t+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'N = A / t = '+a+' * '+t+' = '+result+' ~ '+Math.round(result);
		}	
	}
}

function work(){
	var n = Number(document.getElementsByClassName('inp_class')[0].value);
	var t = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = a / t;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'A = Nt = '+n+'*'+t+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'A = Nt = '+n+'*'+t+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'A = Nt = '+n+'*'+t+' = '+result+' ~ '+Math.round(result);
		}	
	}
}

function pressure(){
	var f = Number(document.getElementsByClassName('inp_class')[0].value);
	var s = Number(document.getElementsByClassName('inp_class')[1].value);

	var result = f/s;
	if (Number.isInteger(result)) {
		res.innerText = '';
		res.innerText = 'p = f / S = '+f+'*'+s+' = '+result;
	}else{
		if (result <= 0.5) {
			res.innerText = '';
			res.innerText = 'p = f / S = '+f+'*'+s+' = '+result;
		}else{
			res.innerText = '';
			res.innerText = 'p = f / S = '+f+'*'+s+' = '+result+' ~ '+Math.round(result);
		}	
	}
}

function AAA(angle1, angle2){
 	var angle1 = Number(document.getElementsByClassName('inp_class')[0].value);
 	var angle2 = Number(document.getElementsByClassName('inp_class')[1].value);
 	var result = (180 - angle1 - angle2) + ' degrees';
 	if (angle1 >= angle2 + result || angle2 >= angle1 + result || result >= angle1+angle2) {
 		alert('Enter valid values ...');
 		res.innerText = '';
 		return;
 	}else{
	 	res.innerText = ''
	 	res.innerText =  result		
 	}
}

function AAS(angleA, angleB, sideA){
	var angleA = document.getElementsByClassName('inp_class')[0].value;
 	var angleB = document.getElementsByClassName('inp_class')[1].value;
 	var sideA = document.getElementsByClassName('inp_class')[2].value;
 	if(Number(angleA) + Number(angleB) > 179){
  		alert('Enter correct values')
  		return;
 	}
 	angleC = 180 - angleA - angleB
	sideB = (sideA * Math.sin(angleB)) / Math.sin(angleA)
 	sideC = (sideB * Math.sin(angleC)) / Math.sin(angleB)
 	if (angleC <= 0 || sideB <= 0 || sideC<=0) {
 		alert('Enter valid parameters');
 		return;
 	}
 	res.innerText = ''
 	res.innerText = 'Angle A: ' + angleA + '\n' +
     'Angle B: ' + angleB + '\n' +
     'Angle C: ' + angleC + '\n' +
     'Side A: ' + sideA + '\n' +
     'Side B: ' + sideB + '\n' +
     'Side C: ' + sideC + '\n'
}

function numSqr(){
	var num = document.getElementsByClassName('inp_class')[0].value;
	if (num == '') {
		alert('Please enter number');
		return;
	}else{
		res.innerText = '';
		res.innerText = num*num;
	}
}
function degree(){
	var num = document.getElementsByClassName('inp_class')[0].value;
	var degree = document.getElementsByClassName('inp_class')[1].value;

	if (num == '' || degree == '') {
		alert('Please enter number');
		return;
	}
	else{
		res.innerText = '';
		res.innerText = Math.pow(num, degree)
	}
}