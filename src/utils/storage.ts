const KEY_PREFIX = '__chai__code__storage__';
const KEY_SUFFIX = '__';

export default {
  get(key) {
    return localStorage.getItem(`${KEY_PREFIX}${key}${KEY_SUFFIX}`);
  },
  set(key, value): void {
    localStorage.setItem(`${KEY_PREFIX}${key}${KEY_SUFFIX}`, value);
  }
}
