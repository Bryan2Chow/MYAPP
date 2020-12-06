import * as d3 from 'd3'
import { zlCalculatorZl } from 'zl_calculator_zl'
const commonF = {
  // 获取实时时间
  getTime: () => {
    var strictIsoParse = d3.timeFormat('%m/%d/%Y-%H:%M:%S')
    return strictIsoParse(new Date())
  },
  // 可做数字（包含小数和整数）间的加，减，乘，除，括号，取余，等运算
  calculator: (CalString) => {
    const res = zlCalculatorZl(CalString)
    return res
  },
  // 绘制力导向图
 
  // 随机产生介于min和max之间的数字
  getRndInteger: (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}

export default commonF