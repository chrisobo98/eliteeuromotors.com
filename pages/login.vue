<template>
  <AuthForm
    title="Customer Login"
    subtitle="Welcome back! Log In below"
    buttonText="Log In"
    promptText="Don't have an account?"
    linkText="Register"
    linkTo="/register"
    linkClass="text-red-500"
    :onSubmit="signInNewUser"
  />
</template>

<script setup>
import { useRouter } from "vue-router";
import AuthForm from "../components/ui/AuthForm.vue";

const supabase = useSupabaseClient();
const router = useRouter();

const signInNewUser = async (email, password) => {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (!error) {
    await router.push("/account");
  }
}
</script>
