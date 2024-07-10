import { defineNuxtPlugin } from '#app'
import Medusa from '@medusajs/medusa-js'

export default defineNuxtPlugin((nuxtApp) => {
  const baseUrl = nuxtApp.$config.medusaBaseUrl as string
  const medusa = new Medusa({ baseUrl, maxRetries: 3 })
  nuxtApp.provide('medusa', medusa)
})
