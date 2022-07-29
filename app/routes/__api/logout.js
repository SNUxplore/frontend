export let action = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
