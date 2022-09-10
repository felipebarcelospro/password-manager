/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export default () => ({
  transformer: {
    enabled: true,
    config: {
      prefix: '/api/',
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true
      }
    }
  }
})
