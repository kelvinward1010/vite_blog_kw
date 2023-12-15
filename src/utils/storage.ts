
const storage = {
  getToken: () => {
    return JSON.parse(
      window.localStorage.getItem(`access_token`) as string,
    );
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`access_token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`access_token`);
  },
};

export default storage;