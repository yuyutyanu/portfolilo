class Turtle {
  constructor (_p, _todo, _len, _theta) {
    this.p = _p
    this.todo = _todo
    this.len = _len
    this.theta = _theta
  }

  render () {
    const colors = ['#E9D460', '#FDE3A7', '#FABE58']

    this.todo.split('').forEach((c) => {
      if (c === 'F') {
        const index = Math.floor(Math.random() * 3)
        this.p.stroke(colors[index])
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

  changeLen (percent) {
    this.len *= percent
  }

  setTodo (_todo) {
    this.todo = _todo
  }
}

export default Turtle
