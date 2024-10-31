import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
export default defineConfig({
    preflight: true,
    presets: ["@pandacss/preset-base",
        createPreset({
            accentColor: "teal",
            grayColor: "sage",
            borderRadius: "xl",
            additionalColors: ["red", "neutral", "brown", "indigo"],
        }),
    ],
    include: ["./src/**/*.{js,jsx,ts,tsx}"],
    exclude: [],
    outdir: "styled-system",
    jsxFramework: "solid",
});
