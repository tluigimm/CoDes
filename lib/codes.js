class DB {
  constructor(url) {
    firebase.initializeApp({databaseURL: url})
    this.database = firebase.database()
  }

  download(endpoint, callback) {
    this.database.ref(endpoint).once('value')
      .then(function(snapshot) {
        callback(snapshot.val())
      })
  }
}


function connect(url) {
  return new DB(url)
}


function replace(selector, context) {
  let element = document.querySelector(selector)
  let template = Handlebars.compile(element.innerHTML)
  element.innerHTML = template(context)
}


function extract() {
  let searchParams = new URLSearchParams(window.location.search)
  let params = {}
  for(let pair of searchParams) {
    params[pair[0]] = pair[1]
  }
  return params
}
