// vite.config.ts
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/blynix1/', // <--- ADD THIS LINE (use your repo name)
    plugins: [react(), tailwindcss()],
    // ... rest of your config
  };
});
