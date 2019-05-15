class User {
  constructor(email, pasword) {
  this.email = email
  this.password = password
  }
}


class Classic {
  constructor(art_url) {
  this.frame = "black-border"
  // thing_to_set = condition
  this.art_url = "art-url"

  render(user) {
      let el = document.createElement('div')
      el.style.width = '100px'
      el.style.height = '100px'
      el.style.backgroundcolor = 'black'
      document.body.appendChild(el)
    }
  }
}

user1 = new User ("dave@show.com", "comedy")
