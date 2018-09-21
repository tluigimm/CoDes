document.addEventListener('DOMContentLoaded', function() {
	let db = connect('https://co-design-9ee8e.firebaseio.com/')

	let params = extract()

	let url = '/' + params['category'] + '/courses/' + params['course']

	db.download(url, function(data) {
		replace('body', {
		'name': data['name'],
		'goals': data['goals'],
		})
	})
})

