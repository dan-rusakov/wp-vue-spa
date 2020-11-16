import axios from 'axios';

try {
  axios.defaults.headers.common = {
    'X-CSRF-TOKEN':
      typeof window.WordPress !== 'undefined' ? window.WordPress.csrfToken : '',
    'X-Requested-With': 'XMLHttpRequest'
  };
} catch (err) {
  console.error(err);
}
