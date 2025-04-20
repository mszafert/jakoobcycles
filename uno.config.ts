import {
  defineConfig,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [presetWind3()],
  theme: {
    colors: {
      brand: '#8bbf3e',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
