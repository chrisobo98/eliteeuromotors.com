import { Medusa } from '@medusajs/medusa-js'

export default (context, inject) => {
  const medusa = new Medusa({ baseUrl: $config.medusaBaseUrl, maxRetries: 3 })
  inject('medusa', medusa)
}
