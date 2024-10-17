/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#2C343F',
				'background-dark': '#14171C',
				'background-light': '#456',
				'text-color': '#9ab',
				'text-color-dark': '#234',
				'text-color-emph': '#fff',
				'text-color-accent': '#bcd',
				'inp-color': '#567',
				'border-color': '#89a',
				neutral: {
					50: '#f6f7f9',
					100: '#eceff2',
					200: '#d6dbe1',
					300: '#b1bcc8',
					400: '#8798a9',
					500: '#687c8f',
					600: '#556678',
					700: '#445160',
					800: '#3b4551',
					900: '#343c46',
					950: '#23282e'
				},
				primary: {
					50: '#eefff0',
					100: '#d7ffde',
					200: '#b2ffbf',
					300: '#76ff8e',
					400: '#33f557',
					500: '#09de30',
					600: '#00b021',
					700: '#04911f',
					800: '#0a711e',
					900: '#0a5d1c',
					950: '#00340c'
				},
				secondary: {
					50: '#fff9ec',
					100: '#fff2d4',
					200: '#ffe2a7',
					300: '#ffcc70',
					400: '#ffaa36',
					500: '#ff900f',
					600: '#f27405',
					700: '#c85706',
					800: '#9e440e',
					900: '#7f390f',
					950: '#451b05'
				},
				tertiary: {
					50: '#f0f9ff',
					100: '#e1f2fd',
					200: '#bbe6fc',
					300: '#80d2f9',
					400: '#40bcf4',
					500: '#13a2e4',
					600: '#0682c3',
					700: '#06679e',
					800: '#0a5882',
					900: '#0e496c',
					950: '#092f48'
				}
			}
		}
	},
	plugins: []
};
