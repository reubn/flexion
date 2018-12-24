const convertToGetters = function (original, context, key, thisValue) {
  const detached = {...original}

  for (key in context)
    if (context.hasOwnProperty(key))
      if (Object.prototype.toString.call(context[key]) === '[object Object]')
        detached[key] = convertToGetters(detached[key] || {}, context[key], undefined, thisValue);
      else
        Object.defineProperty(detached, key, {get: context[key].bind(thisValue), enumerable: true})
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
