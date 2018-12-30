import util from 'util'

import {detailedDiff} from 'deep-object-diff'

import flexion from './'
import wordRef from './wordRef'

const fancyLog = whatever => console.log(util.inspect(whatever, {
  depth: Infinity,
  compact: false,
  colors: true
}))

process.stdin.setEncoding('utf8')
process.stdin.on('readable', async () => {
  process.stdin.resume()
  const input = process.stdin.read()
  if(input !== null){
    const start = process.hrtime()
    const result = flexion(input)
    const end = process.hrtime(start)

    const wordRefResult = await wordRef(input).catch(e => console.error(e))
    const diff = detailedDiff(result, wordRefResult)

    const test = !Object.keys(diff.updated).length

    fancyLog(result)
    console.log(end[0], 's', end[1] / 10**6, 'ms')
    if(!test) fancyLog(diff)
    console.log(test ? 'PASSED' : 'FAILED')

  }
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
