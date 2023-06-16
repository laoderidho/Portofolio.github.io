class HeaderAnimation {
  constructor ({ header1, header2 }) {
    this._header1 = header1
    this._header2 = header2
    this._runAnimation()
  }

  _animateHeader1 () {
    return new Promise(resolve => {
      this._header1.style.animation = 'itemAnimation .8s ease-in-out'
      this._header1.addEventListener('animationend', () => {
        resolve()
      }, { once: true })
    })
  }

  _animateHeader2 () {
    return new Promise(resolve => {
      this._header2.style.animation = 'itemAnimation .8s ease-in-out'
      this._header2.style.visibility = 'visible'
      this._header2.addEventListener('animationend', () => {
        resolve()
      }, { once: true })
    })
  }

  async _runAnimation () {
    await this._animateHeader1()
    await this._animateHeader2()
  }
}

export default HeaderAnimation
