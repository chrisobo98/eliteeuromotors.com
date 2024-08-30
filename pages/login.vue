<template>
  <AuthForm
    :title="$t('login.header')"
    :subtitle="$t('login.welcome_message')"
    :buttonText="$t('login.log_in_button')"
    :promptText="$t('login.no_account')"
    :linkText="$t('login.unlock_potential.create_account_button')"
    :linkTo="localePath('/register')"
    linkClass="text-red-500"
    :onSubmit="signInNewUser"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import AuthForm from "../components/ui/AuthForm.vue";

const supabase = useSupabaseClient();
const router = useRouter();
const localePath = useLocalePath();

useHead({
  title: 'Login | Access Your Elite Euro Motors Account',
  meta: [
    {
      name: 'description',
      content: 'Log in to your Elite Euro Motors account to manage your vehicle information, track service history, and schedule maintenance. Secure access to all your auto care needs.'
    },
    {
      property: 'og:title',
      content: 'Login to Elite Euro Motors'
    },
    {
      property: 'og:description',
      content: 'Access your Elite Euro Motors account to manage your vehicle services and stay up-to-date with your car’s maintenance needs.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/9cf2d13c-05cf-406a-8710-a496be9fb400/public'
    }
  ]
});

const signInNewUser = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (!error) {
    await router.push(localePath("/account"));
  }
}
</script>
