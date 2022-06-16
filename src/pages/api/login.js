import { loginHandler } from '@storyofams/next-password-protect';

export default loginHandler(process.env.PROD_PASSWORD, {
  cookieName: 'authorization',
});