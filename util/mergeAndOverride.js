const merge = (into, from) => {
  for(const key of Object.keys(from)){
    if(from[key] === undefined);
    else if(Object.prototype.toString.call(from[key]) === '[object Object]') into[key] = merge(into[key] || {}, from[key])
    else into[key] = from[key]
  }
  return into
}

export default merge
