import FlexBetween from "@/components/flex-between";
import { useCustomTheme } from "@/theme";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const palettes = useCustomTheme();
	const [selected, setSelected] = useState("dashboard");

	return (
		<FlexBetween
			mb="0.25rem"
			p="0.5rem 0rem"
			color={palettes.palette.grey.thin}
		>
			{/* LEFT SIDE */}
			<FlexBetween gap="0.75rem">
				<PixIcon sx={{ fontSize: "28px" }} />
				<Typography variant="h4" fontSize="16px">
					Finance Journal
				</Typography>
			</FlexBetween>

			{/* RIGHT SIDE */}
			<FlexBetween gap="2rem">
				<Box sx={{ "&:hover": { color: palettes.palette.primary.medium } }}>
					<Link
						to="/"
						onClick={() => setSelected("dashboard")}
						style={{
							color:
								selected === "dashboard"
									? "inherit"
									: palettes.palette.grey.heavy,
							textDecoration: "inherit",
						}}
					>
						Dashboard
					</Link>
				</Box>
				<Box>
					<Link
						to="/predictions"
						onClick={() => setSelected("predictions")}
						style={{
							color:
								selected === "predictions"
									? "inherit"
									: palettes.palette.grey.heavy,
							textDecoration: "inherit",
						}}
					>
						Predictions
					</Link>
				</Box>
			</FlexBetween>
		</FlexBetween>
	);
};

export default Navbar;
