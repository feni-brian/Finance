import { useTheme as MuiUseTheme } from "@mui/material";

export const tokens = {
	grey: {
		100: "#f0f0f3",
		200: "#e1e2e7",
		300: "#d1d3da",
		400: "#c2c5ce",
		500: "#b3b6c2",
		600: "#8f929b",
		700: "#6b6d74",
		800: "#48494e",
		900: "#242427",
	},
	primary: {
		// light green
		100: "#d0fcf4",
		200: "#a0f9e9",
		300: "#71f5de",
		400: "#41f2d3",
		500: "#12efc8",
		600: "#0ebfa0",
		700: "#0b8f78",
		800: "#076050",
		900: "#043028",
	},
	secondary: {
		// yellow
		100: "#fcf0dd",
		200: "#fae1bb",
		300: "#f7d299",
		400: "#f5c377",
		500: "#f2b455",
		600: "#c29044",
		700: "#916c33",
		800: "#614822",
		900: "#302411",
	},
	tertiary: {
		// purple
		500: "#8884d8",
	},
	background: {
		light: "#2d2d34",
		main: "#1f2026",
	},
};

export const useCustomTheme = () => {
	// mui theme settings
	const theme = MuiUseTheme();
	const themeSettings = {
		...theme,
		palette: {
			primary: {
				...tokens.primary,
				main: tokens.primary[500],
				light: tokens.primary[100],
				thin: tokens.primary[200],
				regular: tokens.primary[300],
				medium: tokens.primary[400],
				semidark: tokens.primary[500],
				dark: tokens.primary[600],
				heavy: tokens.primary[700],
				semiblack: tokens.primary[800],
				black: tokens.primary[900],
			},
			secondary: {
				...tokens.secondary,
				main: tokens.secondary[500],
				light: tokens.secondary[100],
				thin: tokens.secondary[200],
				regular: tokens.secondary[300],
				medium: tokens.secondary[400],
				semidark: tokens.secondary[500],
				dark: tokens.secondary[600],
				heavy: tokens.secondary[700],
				semiblack: tokens.secondary[800],
				black: tokens.secondary[900],
			},
			tertiary: {
				...tokens.tertiary,
				main: tokens.tertiary[500],
			},
			grey: {
				...tokens.grey,
				light: tokens.grey[100],
				thin: tokens.grey[200],
				regular: tokens.grey[300],
				medium: tokens.grey[400],
				semidark: tokens.grey[500],
				dark: tokens.grey[600],
				heavy: tokens.grey[700],
				semiblack: tokens.grey[800],
				black: tokens.grey[900],
			},
			background: {
				default: tokens.background.main,
				light: tokens.background.light,
			},
		},
		typography: {
			fontFamily: ["Inter", "sans-serif"].join(","),
			fontSize: 12,
			h1: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 32,
			},
			h2: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 24,
			},
			h3: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 20,
				fontWeight: 800,
				color: tokens.grey[200],
			},
			h4: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 14,
				fontWeight: 600,
				color: tokens.grey[300],
			},
			h5: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 12,
				fontWeight: 400,
				color: tokens.grey[500],
			},
			h6: {
				fontFamily: ["Inter", "sans-serif"].join(","),
				fontSize: 10,
				color: tokens.grey[700],
			},
		},
	};

	return themeSettings;
};
