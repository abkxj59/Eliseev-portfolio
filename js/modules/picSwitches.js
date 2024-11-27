const initPicSwitches = () => {
  setInterval(() => {
    document.body.classList.toggle('show-after-pics');
  }, BEFORE_AFTER_SWITCH_INTERVAL_SEC * 1000);
};

export { initPicSwitches };
