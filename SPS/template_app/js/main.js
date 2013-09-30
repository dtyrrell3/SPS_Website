//--------------------------------------------------------------
//initializes controller
myApp = angular.module('myApp', [])

myApp.config(function($routeProvider) {
	$routeProvider.
		when('/Home', {controller:homectrl, templateUrl:'views/home.html'}).
		when('/About Us', {controller:aboutusctrl, templateUrl:'views/aboutus.html'}).
		when('/Members', {controller:membersctrl, templateUrl:'views/members.html'}).
		when('/Events', {controller:eventsctrl, templateUrl:'views/events.html'}).
		when('/Projects', {controller:projectsctrl, templateUrl:'views/projects.html'}).
		when('/Photos', {controller:photosctrl, templateUrl:'views/photos.html'}).
		when('/Course Guide', {controller:courseguidectrl, templateUrl:'views/courseguide.html'}).
		when('/FAQ', {controller:faqctrl, templateUrl:'views/faq.html'}).
		otherwise({redirectTo:'/Home'});
});
//--------------------------------------------------------------
//Main (regular controller)
function mainctrl ($scope, $location) {
	$scope.items = ['Home', 'About Us', 'Members', 'Events', 'Projects', 'Photos', 'Course Guide', 'FAQ'];


	$scope.goto = function(item) {
		$location.path('/'+item);
	};
};
//--------------------------------------------------------------
//Home page controller
function homectrl($scope) {
	$scope.textinput = "Hello! Welcome to Berkeley's Physics Club!"
};
//--------------------------------------------------------------
//About Us page controller
function aboutusctrl($scope) {};
//--------------------------------------------------------------
//Members page controller
function membersctrl($scope) {
	$scope.officers = [
        {
                position:'President',
                description:'',
                name:'Rebecca Jolitz',
                img:'img/Rebecca Jolitz.jpg',
                bio:'                                                                            .'
        },
        {
                position:'Vice-President',
                description:'',
                name:'William Tokumaru',
                img:'img/William Tokumaru.jpg',
                bio:'                                                                            .'
        },
        {
                position:'Secretary',
                description:'',
                name:'Nathanan Tantivasadakarn',
                img: 'img/Nathanan Tantivasadakarn',
                bio: '                                                                            .'
        },
        {
                position:'Treasurer',
                description: '',
                name:'Daniel Tyrrell',
                img:'//img/Daniel Tyrrell',
                bio: '                                                                            .'
        },
        {
                position:'Social Liaison',
                description:'',
                name:'Kunal Marwahaha',
                img:'img/Kunal Marwahaha',
                bio: '                                                                            .'                                                                       
        },
        {
                position:'Project Liaison',
                description:'',
                name:'Arsalan Radmehr',
                img:'//img/Arsalan Radmehr',
                bio:'                                                                            .'
        },
        {
                position:'Technology Chair',
                description:'',
                name:'Isaac Domagalski',
                img:'img/Isaac Domagalski',
                bio:'                                                                            .'
        },
	    {
                position:'Transportation',
                description:'',
                name:'Anthony Pollerno',
                img:'img/Anthony Pollerno',
                bio:'                                                                            .'
        },
        {
                position:'Mascot',
                description:'',
                name:'Dhruv Desai',
                img:'img/Dhruv Desai',
                bio:'                                                                            .'
        }
];



	$scope.roster = [
		'William Tokumaru',
		'Rebecca Jolitz',
		'Anthony Polloreno',
		'Dhruv Desai',
		'Arsalan Radmehr',
		'Eric Parsonnet',
		'Seth Hirsh',
		'Daniel Tyrrell',
		'Kunal Marwaha',
	]
};
//--------------------------------------------------------------
//Events page controller
function eventsctrl($scope) {
	$scope.showpastevents = false;
	$scope.show = function() {$scope.showpastevents = true};
	$scope.hide = function() {$scope.showpastevents = false};

	$scope.today = new Date();
	$scope.upcoming = function(item) {return (item.datetime > $scope.today)};
	$scope.past = function(item) {return (item.datetime < $scope.today)};

	$scope.eventheaders = ['Event', 'Type', 'Date', 'Time', 'Location', 'Details'];
	$scope.pasteventheaders = ['Event', 'Type', 'Date', 'Time', 'Location', 'Details'];

	$scope.events = [
		{
			name:'Welcome to the Physical Sciences! Panel Discussion',
			type:'Academics',
			datetime:new Date(2013, 7, 27, 11, 45),
			datetimeEnd: new Date(2013, 7, 27, 12, 30),
			location:'375 LeConte Hall',
			description:'This event is intended for Freshman. Come hang out, meet people, and enjoy free food!',
		},
		{
			name:'Faculty-Student Lunch (with Dr. Yury Kolomensky)',
			type:'Academics/Social',
			datetime:new Date(2013, 8, 27, 12, 15),
			datetimeEnd: new Date(2013, 8, 27, 13, 15),
			location:'375 LeConte Hall',
			description:'This event is for all undergrads. Want free pizza? Want to interact with a professor? Just interested in physics? Then, come by and enjoy lunch with fellow physics students and Dr. Yury Kolomensky, an experimental particle physicist.',
		},
		{
			name:'Cal SPS Exhibit at BASF Discovery Days',
			type:'Outreach',
			datetime: new Date(2013, 10, 2, 11),
			datetimeEnd: new Date(2013, 10, 2, 16),
			location: 'AT&T Park',
			description:'This event is for all undergrads.',
		},
		{
			name:'Faculty-Student Lunch (with Dr. Bob Jacobsen)',
			type:'Academics/Social',
			datetime: new Date(2013, 9, 22),
			datetimeEnd: new Date(2013, 9, 22),
			location:'375 LeConte Hall',
			description:'This event is for all undergrads. Want free pizza? Want to interact with a professor? Just interested in physics? Then, come by and enjoy lunch with fellow physics students and Dr. Bob Jacobsen, a particle physicist.',
		},
		{
			name:'Faculty-Student Lunch( with Dr. Roger Falcone)',
			type:'Academics/Social',
			datetime: new Date(2013, 10, 21),
			datetimeEnd: new Date(2013, 10, 21) ,
			location:'375 LeConte Hall',
			description:'This event is for all undergrads. Want free pizza? Want to interact with a professor? Just interested in physics? Then, come by and enjoy lunch with fellow physics students and Dr. Roger Falcone, whose research is in Atomic, Molecular, and Optical physics.',
		}
	]

};
//--------------------------------------------------------------
//Projects page controller
function projectsctrl($scope) {};
//--------------------------------------------------------------
//Photos page controller
function photosctrl($scope) {};
//--------------------------------------------------------------
//Course Guide page controller
function courseguidectrl($scope) {};
//--------------------------------------------------------------
//FAQ page controller
function faqctrl($scope) {
	$scope.qa = [
		{
			question: 'How do I get into grad school and/or get a great job?',
			answer: 'Do not worry about planning so far ahead as your plans will almost certainly change. One of the most important aspects of your resume not based on classes is research. To get this, you must talk to professors who do what you are probably most interested in, which leads to future opportunities. However, chances are that you will not be qualified enough to do much as an incoming freshman just yet, so do not worry too much about it. The physics GRE is also important, but it is based on physics 7ABC content, so just do well in your introductory classes for now as you work your way to a degree.'
		},
		{
			question: 'How do I get a degree in physics?',
			answer: 'In addition to the ordinary university and college requirements, you must take a series of courses in the physics and math departments.Courses in introductory computer science and chemistry are also recommended. You must take the lower division half of these courses (numbered below 100), then declare your major as physics, then take the upper division courses. You may take upper division physics before declaring with the professor.s permission, but it is not recommended. Most first semester freshmen start with a math course, Physics (H)7A, one to two non-major-prerequisite courses, and assorted minor (<3 unit) courses. '
		},
		{
			question: 'Why is my degree a Bachelor of Arts?',
			answer: 'With the exception of Engineering Physics in the College of Engineering, all physics degrees at UC Berkeley are BAs because the department of physics is in the College of Letters and Science. However, most professional organizations know this and view it like a BS from any other comparable university.'
		},
		{
			question: 'Why do I have to take 7A first?',
			answer: 'The first physics course, 7A is required for all physics majors. A 9 total from the combined scores on both Physics C tests allows you to skip 7A for other majors that require it. If you got a 5 on mechanics or some other decent background in the field, we recommend you take physics H7A, the honors version of the course. Due to a smaller class size, better textbooks, and a more cooperative environment, it is considered more useful. However, it is very math-heavy and requires a great deal of studying, so do not be afraid of trying it out and then dropping to 7A with your dignity intact. Physics 8A is for other majors like Biology that do not need to go as in-depth.'
		},
		{
			question: 'Should I take 7A in my first semester, or should I wait?',
			answer: 'It depends on your previous background, and whether you want to do honors or not. H7A is historically only offered in the Fall. For spring admitted students, if you feel that your mathematics background is not that strong (e.g. didn.t take AP Calculus) then you might consider taking math 1A/1B in your spring year and then take H7A in the upcoming fall. If you can waive math 1A/1B then there are 2 options depending on how fast you want to go. If you don.t want to wait until fall to take H7A, it is possible to take the regular 7A first and take H7B in the fall instead, or even both at once in the spring.'
		},
		{
			question: 'What math classes should I take in my freshmen year and when?',
			answer: 'The math prerequisites for the physics major are math 1A-1B-53-54.  If you have not done AP Calculus then 1A-1B would be the thing (1A is AB and 1B is BC). If you have taken AP Calculus but you did not get a good score or feel like you are still not good at integrating, math 1B would be a good start.'
		},
		{
			question: 'Should I take math 53 or math 54 first?',
			answer: 'Physics H7A might require some knowledge of vector calculus (when dealing with conservative forces) but it is heavily used in H7B. Therefore, it is recommended to take math 53 concurrently with your 7A/H7A course before taking H7B. The topics learned in math 54 are mostly used later in the upper division courses. However, if you have interest in going into quantum physics (137A, look up the fine structure constant) for whatever reason before other upper division physics, you may want to take math 54 and 110 as soon as possible.'
		},
		{
			question: 'Should I take 137A or 105 first?',
			answer: 'Yes.'
		},
	];
};
//--------------------------------------------------------------
