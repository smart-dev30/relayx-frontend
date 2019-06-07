export function saveToStorage(key, data) {
  if (typeof data === 'object') {
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    localStorage.setItem(key, data)
  }
}

export function getFromStorage(key, isJson = true) {
  try {
    return isJson ? JSON.parse(localStorage.getItem(key)) : localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}