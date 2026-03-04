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
          name: 'Satoshi',
          weights: ['400'],
          provider: 'fontshare'
        }],
        style: [{
          name: 'Stardom',
          provider: 'fontshare'
        }],
        style1: [{
          name: 'Bonny',
          provider: 'fontshare'
        }],
      }
    }),
    presetAttributify()
  ],
})
