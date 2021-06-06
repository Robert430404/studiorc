type CookieKey = string;

type CookieValue = string;

type Cookie = {
  key: CookieKey;
  value: CookieValue;
  expiration?: Date;
};

export const setCookie = (cookie: Cookie): void => {
  const diff = cookie.expiration.valueOf() - new Date().valueOf();

  document.cookie = `${cookie.key}=${cookie.value}; max-age=${diff};`;
};

export const getCookie = (key: CookieKey): Cookie => {
  const found = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${key}=`))
    .split('=')
    .pop();

  return {
    key: key,
    value: found,
  };
};
