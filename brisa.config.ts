/// file: brisa.config.ts
import vercel from 'brisa-adapter-vercel';

export default {
  output: 'static', // or 'static'
  outputAdapter: vercel({
    // see below for options that can be set here
  })
};
