src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js'
integrity =
  'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
crossorigin = 'anonymous'

src = 'https://code.jquery.com/jquery-3.2.1.slim.min.js'
integrity =
  'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
crossorigin = 'anonymous'

src = 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js'
integrity =
  'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
crossorigin = 'anonymous'

src = 'https://kit.fontawesome.com/585aa6bc7c.js'
crossorigin = 'anonymous'

function VolumeInicial() {
  var audio = document.getElementById('som')
  audio.volume = 0.08
}

if (autoplay) {
  VolumeInicial()
}
