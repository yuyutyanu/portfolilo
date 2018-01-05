class Turtle {
  constructor (_p, _todo, _len, _theta) {
    this.p = _p
    this.todo = _todo
    this.len = _len
    this.theta = _theta
    this.weight = 40
    this.color = '#000'
  }

  render () {
    const weight = this.getWeight()
    this.p.strokeWeight(weight)

    this.todo.split('').forEach((c) => {
      if (c === 'F') {
        this.p.stroke(this.getColor())
        this.p.line(0, 0, this.len, 0)
        this.p.translate(this.len, 0)
      } else if (c === '+') {
        this.p.rotate(this.theta)
      } else if (c === '-') {
        this.p.rotate(-this.theta)
      } else if (c === '[') {
        this.p.push()
      } else if (c === ']') {
        this.p.pop()
      }
    })
  }

  getWeight () {
    if (this.weight === 0) {
      this.weight = 1
      return this.weight
    }

    this.weight -= 10
    return this.weight
  }

  getColor () {
    const colors = ['#E9D460', '#FDE3A7', '#FABE58'] // yellow
    const index = Math.floor(Math.random() * 3)
    return colors[index]
  }

  changeLen (percent) {
    this.len *= percent
  }

  setTodo (_todo) {
    this.todo = _todo
  }
}

export default Turtle
