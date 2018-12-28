
export default ({inflections}, infinitive) => {
  const verb = {
    infinitive,
    inflections: {
      root() {
        return infinitive.substring(0, infinitive.length - 2)
      }
    }
  }

  function compileTree({into: intoOriginal={}, from, key}){
    const into = {...intoOriginal}

    for (key in from)
      if (from.hasOwnProperty(key))
        if (Object.prototype.toString.call(from[key]) === '[object Object]') into[key] = compileTree({into: into[key], from: from[key]})
        else into[key] = typeof from[key] === 'function' ? from[key].name.endsWith('Mixin') ? from[key].call(verb, verb) : from[key].bind(verb, verb) : from[key]

    return into
  }

  verb.inflections = compileTree({from: {...verb.inflections, ...inflections}})
  return verb
}
