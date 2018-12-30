import util from 'util'

import {detailedDiff} from 'deep-object-diff'

import conjugate from './conjugate'
import wordRef from './wordRef'

process.stdin.setEncoding('utf8')

process.stdin.on('readable', async () => {
  process.stdin.resume()
  var chunk = process.stdin.read()
  if(chunk !== null){
    const trimmed = chunk.trim()

    const start = process.hrtime()
    const result = conjugate(trimmed)
    const end = process.hrtime(start)

    const evaluated = JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'function' ? value() : value), (key, value) => value === 'function' ? ()=>0 : value)
    const refres = await wordRef(trimmed).catch(e => console.error(e))
    const diff = detailedDiff(evaluated, refres)

    console.log(util.inspect(evaluated, {
      depth: Infinity,
      compact: false,
      colors: true
    }))
    console.log(end[0], 's', end[1] / 10**6, 'ms')
    console.log(!Object.keys(diff.updated).length ? 'PASSED' : 'FAILED')

  }
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
