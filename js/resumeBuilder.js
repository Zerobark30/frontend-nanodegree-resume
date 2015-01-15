
var work = {
	"jobs" : [
		{
			"title" : "Senior Data Analyst",
			"employer" : "Montefiore Medical Center",
			"years" : "2012 - present",
			"location" : "New York, NY",
			"description" : "Developed and maintained database management and business analytics to suport the Strategic Planning department and the Montefiore strategic plan in general"
		},
		{
			"title" : "Supply Chain Analyst",
			"employer" : "Greater New York Hospital Association",
			"years" : "2011 - 2012",
			"location" : "New York, NY",
			"description" : "Created and presented analytics related to supply chain and contract optimization for hospitals in the Greater New York area"
		},
		{
			"title" : "Community Health Educator",
			"employer" : "United States Peace Corps",
			"years" : "2008 - 2010",
			"location" : "Turkmenistan",
			"description" : "Taught general health education, english and teaching methodologies, in Turkmen and Uzbek to Turkmen nationals"
		}]
};

var projects = {
	"projects" : [
		{
			"title" : "ZeroBark30 Productions website",
			"dates" : "December 2014 - present",
			"description" : "Developing website to curate work relating to different interests"
		}
	]
};
	
var bio = {
	"name" : "Matthew Wells",
	"role" : "Web Developer",
	"contacts" :  {
		"email" : "matthewpwells@gmail.com", 
		"phone" : "(609) 731-7278",
		"github" : "ZeroBark30"},
	"picture_url" : "images/Marcus_serious.jpg",
	"welcome_message" : "Do or do not. There is no try.",
	"skillz" : ["Data Analysis","HTML","CSS","GitHub",
		"Chihuahua wrangling","Simpsons Watching"] 
};

var education = {
    "schools" : [
        {
            "school": "Quinnipaic University",
            "graduationYear": "N/A",
            "city": "Hamden",
            "major": "Sociology"
        },
        {
            "school": "University of North Carolina",
            "graduationYear": "2007",
            "city": "Chapel Hill",
            "major": "Sociology"
        }
    ],
	"onlineCourses" : [
		{
		"title" : "Calculus 1",
		"school" : "Berkeley Extension",
		"dates" : 2015,
		"url" : "http://extension.berkeley.edu/search/publicCourseSearchDetails.do?method=load&courseId=41487"
		},
		{
		"title" : "JavaScript Syntax",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud804"
		},
		{
		"title" : "How to use Git and GitHub",
		"school" : "Udacity",
		"dates" : 2015,
		"url" : "http://www.udacity.com/course/ud775"
		},
		{
		"title" : "Intro to HTML and CSS",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/ud304"
		},
		{
		"title" : "Intro to Computer Science",
		"school" : "Udacity",
		"dates" : 2014,
		"url" : "https://www.udacity.com/course/cs101"
		},
		{
		"title" : "Intro to systematic program design",
		"school" : "Coursera",
		"dates" : 2013,
		"url" : "https://www.coursera.org/course/programdesign"
		}
	]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skillz.length > 0) {
	$("#header").append(HTMLskillsStart);
	
	for (skill in bio.skillz) {
		var formattedSkill = HTMLskills.replace("%data%",bio.skillz[skill]);
		$("#skillsH3").append(formattedSkill);
	};
};

function displayWork() {
	if(work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			
			var formattedEmployer = HTMLworkEmployer.replace("%data%",
				work.jobs[job].employer); 
			var formattedTitle = HTMLworkTitle.replace("%data%",
				work.jobs[job].title);
			var titleAndEmployer = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(titleAndEmployer);
			
			var formattedLocation = HTMLworkLocation.replace
				("%data%",work.jobs[job].location);
			$(".work-entry:last").prepend(formattedLocation);	
			
			var formattedDates = HTMLworkDates.replace
				("%data%",work.jobs[job].years);
			$(".work-entry:last").append(formattedDates);
			
			var formattedDescription = HTMLworkDescription.replace
				("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		};
	};
};

displayWork();

$("#main").append(internationalizeButton);

function inName(name) {
	var newName = name.trim();
	var nameArray = newName.split(" ");
	var firstNameLength = nameArray[0].length;
	var firstName = nameArray[0][0].toUpperCase() + 
		nameArray[0].slice(1, firstNameLength).toLowerCase();
	var lastName = nameArray[1].toUpperCase();
	newName = firstName + " " + lastName;
	
	return newName;
	}

