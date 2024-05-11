export function formatNumber(number: number) {
  // const parts = number.toFixed(2).toString().split('.');
  // const integerPart = parts[0];
  // const decimalPart = parts[1] || '';
  // const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // if (decimalPart !== '00') {
  //   return integerWithCommas + '.' + decimalPart;
  // } else {
  //   return integerWithCommas;
  // }

  const integerWithCommas = String(Math.ceil(number)).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  );

  return integerWithCommas;
}
