/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import path from 'path'

export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(
        __dirname,
        '..',
        '..',
        env('DATABASE_FILENAME', '.tmp/data.db')
      )
    },
    useNullAsDefault: true
  }
})
