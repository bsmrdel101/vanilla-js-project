const events = [];

window.listen = (selector, condition, callback) => {
  events.push({ selector, condition, callback });
};

export const attachEvents = () => {
  events.forEach((event) => {
    const { selector, condition, callback } = event;
    document.querySelector(selector).addEventListener(condition, callback)
  });
};
