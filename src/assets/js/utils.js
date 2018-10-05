const utils = {
  mapRange(value, low1, high1, low2, high2) {
    const rangeValue = low2 + (((high2 - low2) * (value - low1)) / (high1 - low1));
    return rangeValue;
  },
  offset(el) {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  },
};

export default utils;
