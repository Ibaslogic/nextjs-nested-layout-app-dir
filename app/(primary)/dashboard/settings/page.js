const SettingsPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h2>Settings page</h2>;
};

export default SettingsPage;
