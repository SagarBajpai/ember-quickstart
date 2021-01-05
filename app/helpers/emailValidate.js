/**
 *
 * @param {string} email
 */
export default function emailValidate(email) {
  if (typeof email !== 'string') return false;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  }
  return false;
}
