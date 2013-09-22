function filterResults(Results, rating, material, price, speed, distance) {
	var length = Results.length, result = null;
	var filteredResults = new Array();
	for (var i = 0; i < length; i++) {
		result = Results[i];
		// First check for rating and owner's speed
		if (result.rating>=rating && result.owner.speed<= speed) {
			// Check if the material is available
			var j=0
			while (typeof result.materials[j] != 'undefined'){
				// Also check if this material is available below the max price
				if (result.materials[j].material == material && result.materials[j].price <= price) {
					filteredResults.push(result);
					break;
				} else {
					j++;
				}
			}

		};
	};
	return filteredResults;
}

var Results = [{
	name:'My Printer1',
	id:'1',
	desc:'This printer prints well, and quickly',
	rating:4,
	owner:{
		lat: 37.87043207190647,
		long: -122.26816536668125,
		name: "Maker Man",
		speed: 24
	},
	materials:{
		0:{
			material:"aluminium",
			price:22
		},
		1:{
			material:"ceramic",
			price:15
		}
	}

},
{
	name:'My Printer2',
	id:'2',
	desc:'This printer prints well, and quickly',
	rating:3,
	owner:{
		lat: 37.87043207190647,
		long: -122.26816536668125,
		name: "Maker Man2",
		speed: 20
	},
	materials:{
		0:{
			material:"bronze",
			price:15
		},
		1:{
			material:"ABS",
			price:10
		}
	}

}];



// ex:  var filteredResults=filterResults(Results, 3, 'ABS', 10, 22);

