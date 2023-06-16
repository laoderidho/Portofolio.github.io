import '../style/main.css'
import '../style/animation.css'
import '../style/mobile_display.css'
import HeaderAnimation from './utils/animation_header'
import '@fortawesome/fontawesome-free/css/all.min.css'

// eslint-disable-next-line no-unused-vars
const getHeader = new HeaderAnimation({
  header1: document.querySelector('.item > h1'),
  header2: document.querySelector('.item > h2')
})
// eslint-disable-next-line no-console
console.log('Hello World!')
