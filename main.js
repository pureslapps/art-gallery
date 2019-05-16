
class Classic {
  constructor(picture) {
  this.frame = 'black-border'
  // thing_to_set = condition
  this.art_url = picture
}

  render() {
      let el = document.createElement('img')
      el.style.width = '500px'
      el.style.height = '500px'
      el.src = this.art_url
      el.style.border = 'thin solid black'
      document.body.appendChild(el)
  }
}

let art1 = new Classic('https://scstylecaster.files.wordpress.com/2013/11/botticelli-1.jpg?w=537&h=344')

art1.render()

class Meme extends Classic {
  constructor(args, photo) {
  super(args)
  this.frame1 = 'red-border'
  this.meme_url = photo
}

  render() {
    super.render()
    let el = document.createElement('img')
    el.src = this.meme_url
    el.style.border = 'thin solid red'
  }
}

let meme1 = new Meme('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Zoe_Saldana_by_Gage_Skidmore_2.jpg/220px-Zoe_Saldana_by_Gage_Skidmore_2.jpg')

meme1.render()
