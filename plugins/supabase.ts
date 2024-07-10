import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey

  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key must be provided in the environment variables')
  }

  const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)

  if (!nuxtApp.$supabase) {
    nuxtApp.provide('supabase', supabase)
  }
})
