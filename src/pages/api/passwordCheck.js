import { passwordCheckHandler } from '@storyofams/next-password-protect';

export default passwordCheckHandler(process.env.PROD_PASSWORD, {
  cookieName: 'authorization',
});