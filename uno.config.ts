import {
  defineConfig,
  presetWind3,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        lato: [
          {
            name: 'Lato',
            weights: ['300', '400', '700'],
            italic: true,
          },
        ],
        oswald: [
          {
            name: 'Oswald',
            weights: ['700'],
          },
        ],
      },
    }),
  ],
  theme: {
    colors: {
      brand: '#8bbf3e',
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
