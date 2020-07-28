export function removeUnderline(str) {
  const noUnderline = str.replace('_', ' ');
  return noUnderline;
}

export function capitalize(str) {
  const arr = str.split(' ');
  const capitalizedArr = arr.map(strArr => strArr.charAt(0).toUpperCase() + strArr.slice(1));
  const capitalized = capitalizedArr.join(' ');
  return capitalized;
}