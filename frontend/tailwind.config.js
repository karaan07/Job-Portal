/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'], // Enable dark mode with class strategy
	content: [
	  './index.html', // Include your HTML file
	  './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS files in src
	],
	theme: {
	  extend: {
		// Border Radius Adjustments
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		
		// Color Palette Customization
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  
		  // Card and Popover Colors
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  
		  // Primary and Secondary Colors
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
  
		  // Additional Colors
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  
		  // Utility Colors
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  
		  // Chart Colors (Specific to Charts)
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
  
		// Extend fontSize, padding, etc. if needed
		fontSize: {
		  'xs': '0.75rem',
		  'sm': '0.875rem',
		  'base': '1rem',
		  'lg': '1.125rem',
		  'xl': '1.25rem',
		  '2xl': '1.5rem',
		},
		spacing: {
		  '18': '4.5rem',
		  '72': '18rem',
		  '84': '21rem',
		  '96': '24rem',
		},
	  },
	},
	
	// Plugins
	plugins: [require('tailwindcss-animate')], // Add animate plugin
  };
  