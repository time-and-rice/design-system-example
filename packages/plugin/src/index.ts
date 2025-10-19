import twPlugin from "tailwindcss/plugin";

type TailwindPlugin = ReturnType<typeof twPlugin>;

const plugin: TailwindPlugin = twPlugin(() => {}, {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-indigo-500)",
          "50": "var(--color-indigo-50)",
          "100": "var(--color-indigo-100)",
          "200": "var(--color-indigo-200)",
          "300": "var(--color-indigo-300)",
          "400": "var(--color-indigo-400)",
          "500": "var(--color-indigo-500)",
          "600": "var(--color-indigo-600)",
          "700": "var(--color-indigo-700)",
          "800": "var(--color-indigo-800)",
          "900": "var(--color-indigo-900)",
        },
        secondary: {
          DEFAULT: "var(--color-gray-500)",
          "50": "var(--color-gray-50)",
          "100": "var(--color-gray-100)",
          "200": "var(--color-gray-200)",
          "300": "var(--color-gray-300)",
          "400": "var(--color-gray-400)",
          "500": "var(--color-gray-500)",
          "600": "var(--color-gray-600)",
          "700": "var(--color-gray-700)",
          "800": "var(--color-gray-800)",
          "900": "var(--color-gray-900)",
        },
      },
    },
  },
});

export default plugin;
export type { TailwindPlugin };
