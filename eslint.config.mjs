import nextVitals from "eslint-config-next/core-web-vitals.js";

export default [
  nextVitals,
  {
    settings: {
      next: { rootDir: process.cwd() },
    },
  },
];
