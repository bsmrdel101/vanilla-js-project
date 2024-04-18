export const Component = (html) => {
  const obj = document.createElement('div');
  obj.insertAdjacentHTML('beforeend', html);
  return obj;
};
