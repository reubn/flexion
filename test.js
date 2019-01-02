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
  const [query, dontRunTest] = input.split(' ')
  if(input !== null){
    const result = flexion(query)
    fancyLog(result)

    if(!dontRunTest){
      const wordRefResult = await wordRef(query).catch(e => console.error(e))
      const diff = detailedDiff(result, wordRefResult)

      const test = !Object.keys(diff.updated).length

      if(!test) fancyLog(diff)
      console.log(test ? 'PASSED' : 'FAILED')
    }
  }
})

process.stdin.on('end', () => {
  process.stdout.write('end')
})
