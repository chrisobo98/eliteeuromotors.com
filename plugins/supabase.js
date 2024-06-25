import { createClient } from '@supabase/supabase-js'

export default (context, inject) => {
  const supabase = createClient($config.supabaseUrl, $config.supabaseKey)
  inject('supabase', supabase)
}
