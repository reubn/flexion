
export default ({inflections}, infinitive) => {
  const verb = {
    infinitive,
    inflections: {
      root(verb) {
        return verb.infinitive.substring(0, verb.infinitive.length - 2)
      }
    }
  }

  const compileTree = ({into: intoOriginal={}, from, key}) => {
    const into = {...intoOriginal}

    for (key in from)
      if (from.hasOwnProperty(key))
        if (Object.prototype.toString.call(from[key]) === '[object Object]') into[key] = compileTree({into: into[key], from: from[key]})
        else into[key] = typeof from[key] === 'function' ? from[key].name.endsWith('Mixin') ? from[key].call(null, verb) : from[key].bind(null, verb) : from[key]

    return into
  }

  verb.inflections = compileTree({from: {...verb.inflections, ...inflections}})
  return verb
}
