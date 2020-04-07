export function save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function get(key) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

export function remove(key) {
  localStorage.removeItem(key);
}
