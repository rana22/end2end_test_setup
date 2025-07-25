
export function getValueByKey(obj, targetKey) {
  let result;
  let count= 0;
  function recurse(current) {
    count = count + 1;
    if (result !== undefined) return; // Stop once found

    if (typeof current !== 'object' || current === null) return;

    if (current.hasOwnProperty(targetKey)) {
      result = current[targetKey];
      return;
    }

    for (const key in current) {
      if (current.hasOwnProperty(key)) {
        recurse(current[key]);
      }
    }
  }
  if (count > 20) {
    return null;
  }

  recurse(obj);
  return result;
}