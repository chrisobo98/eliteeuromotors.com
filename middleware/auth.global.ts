// middleware/auth.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const user = useSupabaseUser();

  console.log(user.value);

  const protectedRoutes = ['/my-vehicle', '/maintenance', '/notifications', '/profile', '/garage', '/account'];

  // If the user is anonymous and trying to access a protected route, redirect to login
  if (user.value?.is_anonymous && protectedRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  // If the user is fully authenticated (not anonymous) and tries to access login page, redirect to account
  if (user.value && !user.value.is_anonymous && to.path === '/login') {
    return navigateTo('/account');
  }

  // Continue to the requested route if no redirection is needed
});
