import { useCustomTheme } from "@/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Navbar from "./scenes/navbar";
import Predictions from "./scenes/predictions";

function App() {
	const customThemeSettings = useCustomTheme();
	const baseTheme = createTheme({
		palette: customThemeSettings.palette,
		typography: customThemeSettings.typography,
		// Add other custom theme settings here, if needed
	});
	const theme = createTheme({
		...baseTheme,
	});

	return (
		<div className="app">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Box width="100%" height="100%" padding="1rem 2rem">
						<Navbar />
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/predictions" element={<Predictions />} />
						</Routes>
					</Box>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
