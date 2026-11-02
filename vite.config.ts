import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserPagesRepository = repositoryName?.endsWith('.github.io')

export default defineConfig({
  base:
    repositoryName && !isUserPagesRepository ? `/${repositoryName}/` : '/',
  plugins: [react()],
})
