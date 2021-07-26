const a = '11111';
interface A {
  b: string;
}
const fn = function (): A {
  return { b: a };
  console.log(globalThis);
};
export { fn, a };
