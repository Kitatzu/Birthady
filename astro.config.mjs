import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  scripts: {
    // Asegúrate de que esté habilitada la ejecución de scripts JS
    // Puedes agregar más configuraciones según sea necesario
    allowNodeModules: true,
  },
});
