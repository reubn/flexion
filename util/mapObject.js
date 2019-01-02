const mapObject = (obj, fn, path=[]) => {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'object') obj[key] = mapObject(obj[key], fn, [...path, key])
    else obj[key] = fn({keys: [...path, key], value: obj[key]})
  })
  return obj
}

export default mapObject
