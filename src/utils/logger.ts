namespace Logger {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  export function info(...args: any[]) {
    console.log(...args);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  export function error(...args: any[]) {
    console.error(...args);
  }
}

export default Logger;
