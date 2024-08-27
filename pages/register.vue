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