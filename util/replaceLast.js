export default (haystack, needle, replacement) => {
  const lastIndex = haystack.lastIndexOf(needle)
  
  if(lastIndex === -1) return haystack
  return haystack.slice(0, lastIndex) + replacement + haystack.slice(lastIndex + needle.length, haystack.length)
}
