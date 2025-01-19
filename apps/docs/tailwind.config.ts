import type { Config } from 'tailwindcss'
import {
  config as petsConfig
} from '@pets/tailwind'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [petsConfig],
  plugins: [],
}

export default config

