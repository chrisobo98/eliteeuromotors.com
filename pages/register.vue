<template>
  <AuthForm
    :title="$t('login.unlock_potential.header')"
    :subtitle="$t('login.unlock_potential.register_message')"
    :buttonText="$t('login.unlock_potential.create_account_button')"
    :promptText="$t('login.unlock_potential.already_have_account')"
    :linkText="$t('login.log_in_button')"
    :linkTo="localePath('/login')"
    linkClass="text-red-500"
    :onSubmit="signUpNewUser"
  />
</template>

<script setup>
import { useRouter } from 'vue-router';
import AuthForm from "../components/ui/AuthForm.vue";

const supabase = useSupabaseClient();
const router = useRouter();
const localePath = useLocalePath();

useHead({
  title: 'Register | Create Your Elite Euro Motors Account',
  meta: [
    {
      name: 'description',
      content: 'Create your Elite Euro Motors account to easily manage your vehicle services, track maintenance history, and stay connected with our expert team. Join us today!'
    },
    {
      property: 'og:title',
      content: 'Register for Your Elite Euro Motors Account'
    },
    {
      property: 'og:description',
      content: 'Join Elite Euro Motors and create an account to access personalized vehicle management, track services, and receive updates tailored to your car’s needs.'
    },
    {
      property: 'og:image',
      content: 'https://imagedelivery.net/Fe3MnThb4g2VRIhXmqnFdw/9cf2d13c-05cf-406a-8710-a496be9fb400/public'
    }
  ]
});

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (!error) {
    await router.push(localePath('/login'));
  }
}
</script>