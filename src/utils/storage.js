export function saveToStorage(key, data) {
  if (typeof data === 'object') {
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    localStorage.setItem(key, data)
  }
}

export function getFromStorage(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
}