import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import Icons from 'unplugin-icons/vite';

export default defineConfig({
    plugins: [
        tsconfigPaths({ root: './' }),
        solid(),
        Icons({
            compiler: 'solid',
        }),
    ],
})
