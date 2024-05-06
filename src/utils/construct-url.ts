export function constructUrl(baseUrl: string, queryParams: any) {
  const urlParams = new URLSearchParams();

  for (const [key, value] of Object?.entries(queryParams) as any) {
    if (value !== '' && value !== null && value !== undefined) {
      urlParams.append(key, value);
    }
  }

  const finalUrl = `${baseUrl}?${urlParams.toString()}`;

  return finalUrl.toString();
}
