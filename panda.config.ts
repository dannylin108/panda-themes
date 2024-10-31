import { defineConfig } from "@pandacss/dev";
import { type AccentColor, createPreset, type GrayColor } from "@park-ui/panda-preset";


const themes = [
    { name: 'fire', colors: [ 'ruby', 'mauve']},
    { name: 'earth', colors: [ 'amber', 'sand']},
    { name: 'metal', colors: [ 'neutral', 'neutral']},
    { name: 'water', colors: [ 'indigo', 'slate']},
]

const defaultPreset = createPreset({
    accentColor: "teal",
    grayColor: "sage",
    borderRadius: "xl",
    additionalColors: ["red", "neutral", "brown", "indigo"],
});


export default defineConfig({
    preflight: true,
    presets: ["@pandacss/preset-base", defaultPreset],
    include: ["./src/**/*.{js,jsx,ts,tsx}"],
    exclude: [],
    outdir: "styled-system",
    jsxFramework: "solid",
    themes: Object.fromEntries(
        themes.map(({ name, colors }) => [
            name,
            {
                tokens: createPreset({
                    accentColor: colors[0] as AccentColor,
                    grayColor: colors[1] as GrayColor,
                    borderRadius: "xl",
                    additionalColors: ["red", "neutral", "brown", "indigo"],
                }).theme?.extend?.tokens,
                semanticTokens: createPreset({
                    accentColor: colors[0] as AccentColor,
                    grayColor: colors[1] as GrayColor,
                    borderRadius: "xl",
                    additionalColors: ["red", "neutral", "brown", "indigo"],
                }).theme?.extend?.semanticTokens,
            }
        ])
    )
});
