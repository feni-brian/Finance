/* // eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
	interface ExtendedPaletteColour extends PaletteColor {
		[key: number]: string;
	}

	interface ExtendedPalette extends Palette {
		tertiary: PaletteColor;
	}
}

export type { ExtendedPalette, ExtendedPaletteColour }; // Export the custom interfaces
 */
