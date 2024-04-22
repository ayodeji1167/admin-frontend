export function getLastFourItems<T>(array: T[] | any): T[] {
  return array?.slice(Math.max(array?.length - 4, 0));
}
