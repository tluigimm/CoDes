document.addEventListener('DOMContentLoaded', function() {


let db = connect('https://co-design-9ee8e.firebaseio.com/')


let params = extract()

let path = '/' + params['category'] + '/courses/' + params['course']

db.download(path, function(data) {
	
	replace('body', {
		'name': data['name'],
		'goals': data['goals'],
	})




	})

}