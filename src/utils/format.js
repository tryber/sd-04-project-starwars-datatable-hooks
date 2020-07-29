export function removeUnderline(str) {
  return str.replace('_', ' ');
}

export function capitalize(str) {
  const arr = str.split(' ');
  const capitalizedArr = arr.map((strArr) => strArr.charAt(0).toUpperCase() + strArr.slice(1));
  return capitalizedArr.join(' ');
}
