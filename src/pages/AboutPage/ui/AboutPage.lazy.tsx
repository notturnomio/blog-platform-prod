import { lazy } from 'react';

export const AboutPageLazy = lazy(async () => await import('./AboutPage'));

// export const AboutPageLazy = lazy(
//   async () =>
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(import('./AboutPage'));
//       }, 1500);
//     })
// );
