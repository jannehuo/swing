export function save(key: string, val: object) {
  localStorage.setItem(key, JSON.stringify(val));
}

export function get(key: string) {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
}

export function remove(key: string) {
  localStorage.removeItem(key);
}
