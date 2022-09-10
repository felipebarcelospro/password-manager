/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9e8efe26db255acab462495411218a72')
  }
})
