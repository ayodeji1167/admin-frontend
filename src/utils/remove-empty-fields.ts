interface MyObject {
  [key: string]: string | number | boolean; // Define the type of your object properties
}

export function removeEmptyFields(obj: MyObject): MyObject {
  const newObj: MyObject = {};

  for (const key in obj) {
    if (obj[key] !== '') {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
