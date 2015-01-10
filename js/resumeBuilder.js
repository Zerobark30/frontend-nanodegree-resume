var role = "Web Developer"
var name = "Matthew Wells"
var target = "%data%"
var header_id = "#header"
var formattedName = HTMLheaderName.replace(target,name);
var formattedRole = HTMLheaderRole.replace(target,role);

$(header_id).prepend(formattedRole);
$(header_id).prepend(formattedName);


