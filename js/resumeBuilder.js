var target = "%data%";
var header_id = "#header";
var main_id = "#main";
var bio = {
	"name" : "Matthew Wells",
	"role" : "Web Developer",
	"contacts" :  {
		"email" : "matthewpwells@gmail.com", 
		"phone" : "(609) 731-7278"},
	"picture_url" : "images/Marcus_serious.jpg",
	"welcome_message" : "Do or do not. There is no try.",
	"skillz" : ["Data Analysis","HTML","CSS","GitHub",
		"Chihuahua wrangling","Simpsons Watching"] 
};
var formattedName = HTMLheaderName.replace(target,bio.name);
var formattedRole = HTMLheaderRole.replace(target,bio.role);

$(header_id).prepend(formattedRole);
$(header_id).prepend(formattedName);
$(main_id).append(bio.picture_url);

