import { Box, Typography } from "@mui/material";
import * as React from "react";
import FlexBetween from "./flex-between";
import { useCustomTheme } from "@/theme";

type Props = {
  title: string;
  sideText: string;
  subTitle?: string;
  icon?: React.ReactNode;
}

const BoxHeader = ({ icon, title, subTitle, sideText }: Props) => {
  const palettes = useCustomTheme()

  return (
    <FlexBetween color={palettes.palette.grey.medium} margin='1.5rem 1rem 0 1rem'>
      <FlexBetween>
        {icon}
        <Box width='100%'>
          <Typography variant="h4" mb='-0.1rem'>
            {title}
          </Typography>
          <Typography variant="h6">
            {subTitle}
          </Typography>
        </Box>
      </FlexBetween>

      <Typography variant="h5" fontWeight='700' color={palettes.palette.secondary.semidark}>
        {sideText}
      </Typography>
    </FlexBetween>
  )
}

export default BoxHeader
