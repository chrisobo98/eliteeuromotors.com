<template>
  <AuthForm
    title="Unlock the Full Potential of Your Vehicle"
    subtitle="Register for an account below"
    buttonText="Create an Account"
    promptText="Already have an account?"
    linkText="Log in"
    linkTo="/login"
    linkClass="text-red-500"
    :onSubmit="signUpNewUser"
  />
</template>

<script setup>
import { useRouter } from 'vue-router';
import AuthForm from "../components/ui/AuthForm.vue";

const supabase = useSupabaseClient();
const router = useRouter();

async function signUpNewUser() {
  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (!error) {
    await router.push('/login');
  }
}
</script>