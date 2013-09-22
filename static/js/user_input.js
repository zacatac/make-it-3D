
function user_input_parsing(s) {
	var i = s.lastIndexOf('/thing:');
	if (i != -1){ // Testing for thingiverse obj url 
		return parseInt(s.substring(i+7))
	}
	return null;
};

function get_image(id) {
	$.get("", function(data){

	});
}

$(function(){
	$.get("http://api.thingiverse.com/things", {id: 140965}, function(data){
		debugger;
	} );
});
