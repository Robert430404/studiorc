type CookieKey = string;

type CookieValue = string;

type SerializedCookie = string;

type SerializableCookie = { [key: string]: string };

type Cookie = {
  key: CookieKey;
  value: CookieValue;
};

enum CookieName {
  Value = 'studiorc',
}

const serializeCookie = (cookies: SerializableCookie): SerializedCookie => {
  return JSON.stringify(cookies);
};

const deserializeCookie = (): SerializableCookie => {
  const cookie = document.cookie
    ?.split('; ')
    ?.find((row) => row.startsWith(`${CookieName.Value}=`))
    ?.split('=')
    ?.pop();

  if (cookie) {
    return JSON.parse(cookie);
  }

  return {};
};

export const setCookie = (cookie: Cookie): void => {
  const cookies = deserializeCookie();

  cookies[cookie.key] = cookie.value;

  const serialized = serializeCookie(cookies);

  // Make sure everytime the cookie is touched it resets the expiration
  const diff =
    new Date(new Date().valueOf() + 1 * 60 * 60 * 24 * 7).valueOf() -
    new Date().valueOf();

  document.cookie = `${CookieName.Value}=${serialized}; max-age=${diff};`;
};

export const getCookie = (key: CookieKey): Cookie => {
  const found = deserializeCookie()[key];

  return {
    key,
    value: found,
  };
};
