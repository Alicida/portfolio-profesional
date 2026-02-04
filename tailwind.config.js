module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Colores extraídos de Figma (placeholder, reemplazar por valores reales)
        primary: '#1A2238',
        secondary: '#9DAAF2',
        accent: '#FF6A3D',
        background: '#F4F4F4',
        text: '#22223B',
      },
      fontFamily: {
        // Fuentes extraídas de Figma (placeholder, reemplazar por valores reales)
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
