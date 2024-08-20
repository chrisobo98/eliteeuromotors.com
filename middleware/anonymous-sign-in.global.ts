import { defineNuxtRouteMiddleware } from 'nuxt/app'

export default defineNuxtRouteMiddleware(async () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

  // Check if the user is already authenticated
  if (!user.value) {
    const { data, error } = await supabase.auth.signInAnonymously();

    if (error) {
      console.error('Error signing in anonymously:', error.message);
    } else {
      console.log('Signed in as anonymous user:', data.user);
    }
  }
});
