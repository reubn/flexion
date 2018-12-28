const convertToGetters = function (original, context, key, thisValue) {
  const detached = {...original}

  for (key in context)
    if (context.hasOwnProperty(key))
      if (Object.prototype.toString.call(context[key]) === '[object Object]')
        detached[key] = convertToGetters(detached[key] || {}, context[key], undefined, thisValue);
      else {
        const isMixin = context[key].name && context[key].name.endsWith('Mixin')
        const value = isMixin
          ? () => convertToGetters({}, (context[key].call(thisValue)), undefined, thisValue)
          : context[key].bind(thisValue)

        Object.defineProperty(detached, key, {get: value, enumerable: true})
      }
  return detached
}

export default ({verb, inflections}, infinitive) => {
  const template = {
    infinitive,
    inflections: {
      root() {
        return this.infinitive.substring(0, this.infinitive.length - 2)
      }
    }
  }

  template.inflections = convertToGetters({}, {...template.inflections, ...inflections}, undefined, template)

  return template
}
