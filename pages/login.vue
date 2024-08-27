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

const signInNewUser = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (!error) {
    await router.push(localePath("/account"));
  }
}
</script>
