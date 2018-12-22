import util from 'util'

import conjugate from './conjugate'

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  process.stdin.resume()
  var chunk = process.stdin.read();
  if (chunk !== null) {
    const result = conjugate(chunk.trim())
    console.log(util.inspect(JSON.parse(JSON.stringify(result)), {
      depth: Infinity,
      compact: false,
      colors: true
    }))
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});
