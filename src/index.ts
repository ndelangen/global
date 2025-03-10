const scope = (() => {
  let win;

  if (typeof window !== 'undefined') {
    win = window;
  } else if (typeof globalThis !== 'undefined') {
    win = globalThis;
  } else if (typeof global !== 'undefined') {
    win = global;
  } else if (typeof self !== 'undefined') {
    win = self;
  } else {
    win = {};
  }

  return win;
})() as typeof globalThis;

export { scope as global };
