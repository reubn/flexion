const mapObject = (obj, fn) => {
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'object') obj[key] = mapObject(obj[key], fn)
    else obj[key] = fn({key, value: obj[key]})
  })
  return obj
}

export default mapObject
