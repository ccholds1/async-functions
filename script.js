
//FILTER + FIND


// var students = [
// 		{name: 'John Lennon', average: 90},
// 		{name: 'Ringo Star', average: 58},
// 		{name: 'Paul McCartney', average: 82}


// ];


// var passingStudents = students.find(     //students.filter//
// 		function(student){
// 			return student.average > 60;
// 		}
// 	);

// console.log(passingStudents);

//_________________________________________________________________________________________________________________________________________________________


//MAP


// var students = [
// 		{firstname: 'John', lastname: 'Lennon', average: 90},
// 		{firstname: 'Ringo', lastname: 'Star', average: 58},
// 		{firstname: 'Paul', lastname: 'McCartney', average: 82}


// ];


// var fullStudents = students.map(     
// 		function(student){
// 			return student.firstname + ' ' + student.lastname;
// 		}
// 	);

// console.log(fullStudents);

//__________________________________________________________________________________________________________________________________________________________


//REDUCE

// var students = [
// 		{firstname: 'John', lastname: 'Lennon', assignmentsCompleted: 6},
// 		{firstname: 'Ringo', lastname: 'Star', assignmentsCompleted: 10},
// 		{firstname: 'Paul', lastname: 'McCartney', assignmentsCompleted: 8}
// ];


// var totalAssignments = students.reduce(     
// 		function(sum,current){
// 			return sum + current.assignmentsCompleted;
// 		},0);

// console.log(totalAssignments);


//___________________________________________________________________________________________________________________________________________________________


var superHeros = [
	{secretidentity: 'Batman', reveal: 'Bruce Wayne'},
	{secretidentity: 'Spiderman', reveal: 'Peter Parker'},
	{secretidentity: 'The Flash', reveal: 'Barry Allen'}
];

var secretIdentity = superHeros.map(
			function(hero){
				return hero.secretidentity + ' is ' + hero.reveal;
			}
	);

console.log(secretIdentity);