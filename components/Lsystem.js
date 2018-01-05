class Lsystem {
  constructor (axiom, rule) {
    this.sentence = axiom
    this.ruleSet = rule
    this.generation = 0
  }

  generate () {
    let nextGeneration = ''

    for (let i = 0; i < this.sentence.length; i++) {
      let replaceStr = this.sentence.split('')[i]
      const before = this.ruleSet.before
      if (before === replaceStr) {
        replaceStr = this.ruleSet.after
      }
      nextGeneration += replaceStr
    }
    this.sentence = nextGeneration
    this.generation++
  }
}

export default Lsystem
