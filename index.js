import util from 'util'

import conjugate from './conjugate'

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  process.stdin.resume()
  var chunk = process.stdin.read();
  if (chunk !== null) {
    const trimmed = chunk.trim()

    const start = process.hrtime()
    const result = conjugate(trimmed)
    const end = process.hrtime(start)

    console.log(util.inspect(JSON.parse(JSON.stringify(result, (key, value) => typeof value === 'function' ? 'function' : value), (key, value) => value === 'function' ? ()=>0 : value), {
      depth: Infinity,
      compact: false,
      colors: true
    }))
    console.log(end[0], 's', end[1] / 10**6, 'ms')
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
