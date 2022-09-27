const pipe =
  (...fns) =>
  (x) =>
    fns.reduceRight((v, f) => f(v), x);

export { pipe };
