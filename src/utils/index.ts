export function isEmptyObject(object: Object) {
  return Object.keys(object).length === 0 && object.constructor === Object;
}
