const maskObjectAndMap = (mask, func, path=[]) => {
  for(const key of Object.keys(mask)){
    if(mask[key] === undefined);
    else if(Object.prototype.toString.call(mask[key]) === '[object Object]') mask[key] = maskObjectAndMap(mask[key], func, [...path, key])
    else mask[key] = func([...path, key])
  }
  return mask
}

export default maskObjectAndMap
