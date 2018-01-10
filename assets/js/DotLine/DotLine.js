class DotLine {
  constructor (p, lineNum) {
    this.p = p
    this.len = this.p.width / 5
    this.lineNum = lineNum
    this.velocity = this.lineNum % 2 === 0 ? 1 : -1
    this.fromPointX = 0
    this.fromPointY = 0
    this.toPointX = this.len * this.lineNum
    this.toPointY = p.height / 2 + this.p.random(-100, 100)
    this.amplitude = 100 + this.p.random(-20, 20)
  }

  display () {
    if (this.lineNum !== 5) {
      this.p.rectMode(this.p.CENTER)
      this.p.rect(this.toPointX, this.toPointY, 16, 16)
    }

    if (this.lineNum === 1) {
      this.p.line(0, this.p.height / 2, this.len, this.toPointY)
    } else {
      this.p.line(this.fromPointX, this.fromPointY, this.toPointX, this.toPointY)
    }
  }

  update () {
    this.toPointY += this.velocity
    if (this.toPointY > this.p.height / 2 + this.amplitude || this.toPointY < this.p.height / 2 - this.amplitude) {
      this.velocity *= -1
    }
  }

  setFromPoint (x, y) {
    this.fromPointX = x
    this.fromPointY = y
  }
}

export default DotLine
