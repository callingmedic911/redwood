import execa from 'execa'
import { getPaths } from '@redwoodjs/internal'

export const command = 'storybook'
export const description =
  'Launch Storybook, an isolated component development environment'

export const handler = () => {
  const cmd = 'yarn start-storybook'
  const cwd = getPaths().web.base
  execa(
    cmd,
    [
      '--config-dir ../node_modules/@redwoodjs/core/config/storybook',
      '--port 7910',
    ],
    {
      stdio: 'inherit',
      shell: true,
      cwd,
    }
  )
}
