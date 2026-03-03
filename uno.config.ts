import { defineConfig, presetWind4, presetWebFonts, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetWebFonts({
      fonts: {
        mono: [{
          name: 'Array',
          weights: ['600'],
          provider: 'fontshare'
        }],
        sans: [{
          name: 'Stardom',
          provider: 'fontshare'
        }]
      }
    }),
    presetAttributify()
  ],
})
