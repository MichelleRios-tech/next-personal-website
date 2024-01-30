/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        nm: '6px 6px 12px #0f0f0f, -6px -6px 12px #313131' 
      },
      colors: {
        'peach-fuzz': {
          '50': '#FFF4ED',
          '100': '#FFE2D1',
          '200': '#FFD0B4',
          '300': '#FFBE98',
          '400': '#E49B78',
          '500': '#CA7A5B',
          '600': '#AF5C42',
          '700': '#94412D',
          '800': '#792A1C',
          '900': '#5F180F',
          '950': '#440A06',
        },
        'chaos-black': {
          '50': '#F7F7F7',
          '100': '#EFEFEF',
          '200': '#D7D7D7',
          '300': '#BFBFBF',
          '400': '#939393',
          '500': '#676767',
          '600': '#5D5D5D',
          '700': '#404040',
          '800': '#303030',
          '900': '#202020',
          '950': '#101010',
          'nm-convex': 'linear-gradient(145deg, #222222, #1d1d1d)',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}