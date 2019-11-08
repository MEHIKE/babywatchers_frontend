function waitForTime(ms) {
  return new Promise(r => setTimeout(r, ms));
}

export default waitForTime;
