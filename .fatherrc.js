export default {
  entry: ['src/index.js'],
  cjs: 'babel',
  esm: { type: 'babel', importLibToEs: true },
  doc: { base: '/switch' },
  preCommit: {
    eslint: true,
    prettier: true,
  },
  runtimeHelpers: true,
};
