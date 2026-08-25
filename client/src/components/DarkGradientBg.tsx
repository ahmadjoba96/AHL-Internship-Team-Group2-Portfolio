import React from "react";
import { Box } from "@mui/material";

interface DarkGradientBgProps {
  children?: React.ReactNode;
  mode: "light" | "dark";
}

export const DarkGradientBg: React.FC<DarkGradientBgProps> = ({
  children,
  mode,
}) => {
  if (mode === "light") {
    return <Box sx={{ minHeight: "100vh", width: "100%" }}>{children}</Box>;
  }

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        bgcolor: "black",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "absolute", inset: 0 }}>
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            opacity: 1,
          }}
          style={{
            background:
              "radial-gradient(100% 100% at 0% 0%, rgb(46, 46, 46) 0%, rgb(0, 0, 0) 100%)",
            mask: "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
            WebkitMask:
              "radial-gradient(125% 100% at 0% 0%, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.224) 88.2883%, rgba(0, 0, 0, 0) 100%)",
          }}
        >
          {/* Skewed fading blue streaks */}
          <Box
            sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
            style={{
              background:
                "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0) 36%, rgb(0, 0, 0) 55%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <Box
            sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
            style={{
              background:
                "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 11%, rgb(0, 0, 0) 25%, rgba(0, 0, 0, 0.55) 41%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 78%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <Box
            sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
            style={{
              background:
                "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 9%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 28%, rgba(0, 0, 0, 0.424) 40%, rgb(0, 0, 0) 48%, rgba(0, 0, 0, 0.267) 54%, rgba(0, 0, 0, 0.13) 78%, rgb(0, 0, 0) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <Box
            sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
            style={{
              background:
                "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17%, rgba(0, 0, 0, 0.55) 26%, rgb(0, 0, 0) 35%, rgba(0, 0, 0, 0) 47%, rgba(0, 0, 0, 0.13) 69%, rgb(0, 0, 0) 79%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
          <Box
            sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
            style={{
              background:
                "linear-gradient(rgb(0, 207, 255) 0%, rgba(0, 207, 255, 0) 100%)",
              mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              WebkitMask:
                "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 20%, rgba(0, 0, 0, 0.55) 27%, rgb(0, 0, 0) 42%, rgba(0, 0, 0, 0) 48%, rgba(0, 0, 0, 0.13) 67%, rgb(0, 0, 0) 74%, rgb(0, 0, 0) 82%, rgba(0, 0, 0, 0.47) 88%, rgba(0, 0, 0, 0) 97%)",
              transform: "skewX(45deg)",
            }}
          />
        </Box>
      </Box>

      {/* Frame texture */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundRepeat: "repeat",
        }}
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png")',
          backgroundSize: "149.76px",
        }}
      />
      {/* Subtle dot pattern overlay */}
      <Box
        sx={{ position: "absolute", inset: 0, opacity: 0.2 }}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      />

      {/* Subtle radial highlight */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(30,41,59,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 10 }}>{children}</Box>
    </Box>
  );
};

export default DarkGradientBg;
