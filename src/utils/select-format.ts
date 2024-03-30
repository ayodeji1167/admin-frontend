export function getCarOptions(carData: any) {
  const theOptions = [];
  if (carData) {
    for (const carDataItem of carData) {
      theOptions.push({
        value: carDataItem?.carName,
        label:
          carDataItem?.carName.charAt(0).toUpperCase() +
          carDataItem?.carName.slice(1).toLowerCase(),
      });
    }
  }
  theOptions.sort(function (a, b) {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });

  return theOptions;
}

export function getCarModelOptions(carData: any) {
  const theOptions = [];
  if (carData) {
    for (const carDataItem of carData) {
      theOptions.push({
        value: carDataItem,
        label: carDataItem,
      });
    }
  }
  theOptions.sort(function (a, b) {
    if (a.label < b.label) {
      return -1;
    }
    if (a.label > b.label) {
      return 1;
    }
    return 0;
  });

  return theOptions;
}
