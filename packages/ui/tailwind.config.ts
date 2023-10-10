// tailwind config is required for editor support
import sharedConfig from '@neamatmim/tailwind-config/tailwind.config'
import type { Config } from 'tailwindcss'

const config: Pick<Config, 'prefix' | 'presets'> = {
  prefix: 'ui-',
  presets: [sharedConfig],
}

export default config
