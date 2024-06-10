export const fetcher = (url: URL | string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => res.json());
};

export const query = `query { books { author, coverPhotoURL, title, __typename }}`;
