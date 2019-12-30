import Cookies from 'js-cookie';

const setLocaleCookie = (val) => {
  Cookies.set('locale-preference', val);
};
const getLocaleCookie = () => (Cookies.get('locale-preference'));

export {
  setLocaleCookie,
  getLocaleCookie
};
