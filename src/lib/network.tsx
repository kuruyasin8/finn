async function httpGet(path: string, origin?: string) {
  const url = new URL(path, origin ?? window.location.origin);
  return fetch(url).then((response) => response.json());
}

async function httpPost(path: string, origin?: string) {
  const url = new URL(path, origin ?? window.location.origin);
  return fetch(url, {
    method: "POST",
  }).then((response) => response.json());
}

export { httpGet, httpPost };
