import PointObj from '~/assets/js/Polygon/PointObj.js'
class Branch {
  constructor (level, num, points) {
    this.num = num
    this.outerPoints = points
    this.strutFactor = 0.2
    this.midPoints = this.calcMidPoints()
    this.projPoints = this.calcStrutPoints()
  }
  calcMidPoints () {
    const midPointArray = []
    for (let i = 0; i < this.outerPoints.length; i++) {
      let nextIndex = i + 1
      if (nextIndex === this.outerPoints.length) { nextIndex = 0 }

      midPointArray.push(this.calcMidPoint(this.outerPoints[i], this.outerPoints[nextIndex]))
    }
    return midPointArray
  }
  calcMidPoint (point1, point2) {
    const x = (point1.x + point2.x) / 2
    const y = (point1.y + point2.y) / 2
    return new PointObj(x, y)
  }

  calcStrutPoints () {
    const strutPoints = []
    for (let i = 0; i < this.midPoints.length; i++) {
      let opposite = i + 3
      if (opposite >= this.midPoints.length) opposite -= this.midPoints.length
      strutPoints.push(this.calcProjPoint(this.midPoints[i], this.outerPoints[opposite]))
    }
    return strutPoints
  }

  calcProjPoint (midPoint, opposite) {
    let x, y
    if (opposite.x > midPoint.x) {
      const opp = opposite.x - midPoint.x
      x = midPoint.x + (opp * this.strutFactor)
    } else {
      const opp = midPoint.x - opposite.x
      x = midPoint.x - (opp * this.strutFactor)
    }

    if (opposite.y > midPoint.y) {
      const adj = opposite.y - midPoint.y
      y = midPoint.y + (adj * this.strutFactor)
    } else {
      const adj = midPoint.y - opposite.y
      y = midPoint.y - (adj * this.strutFactor)
    }
    return new PointObj(x, y)
  }
}
export default Branch
