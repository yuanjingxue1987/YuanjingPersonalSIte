/**
 * @type {import('next').NextConfig}
 */
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const nextConfig = {
  distDir: 'build',
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      modules: [
        ...config.resolve.modules,
        resolve(__dirname + '/src')
      ]
    }
  })
}

export default nextConfig
