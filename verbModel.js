
export default ({inflections}, infinitive) => {
  const verb = {
    infinitive,
    inflections: {
      root(verb) {
        return verb.infinitive.substring(0, verb.infinitive.length - 2)
      }
    }
  }

  const convertToGetters = (original, context, key) => {
    const detached = {...original}

    for (key in context)
      if (context.hasOwnProperty(key))
        if (Object.prototype.toString.call(context[key]) === '[object Object]')
          detached[key] = convertToGetters(detached[key] || {}, context[key]);
        else {
          const value = context[key]
          const isMixin = typeof value === 'function' && value.name && value.name.endsWith('Mixin')
          detached[key] = isMixin ? value.call(null, verb) : typeof value === 'function' ? value.bind(null, verb) : (console.log(value), value)
        }

    return detached
  }

  verb.inflections = convertToGetters({}, {...verb.inflections, ...inflections})
  return verb
}
