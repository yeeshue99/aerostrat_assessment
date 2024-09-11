import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SearchAppBar from "../../components/Header/SearchAppBar";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import RandomJokeButton from "../../components/util/RandomJokeButton";
import theme from '../theme';
import { Box } from "@mui/system";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aerostrat Dad Joke Generator",
  description: "Dad joke generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <SearchAppBar />
            <Box sx={{width: "80%"}}>
              <Box sx={{position: "absolute", left: "50%", 
                top: "50%", transform: "translate(-50%, -50%)", fontSize: "24px"}}>
                {children}
              </Box>
                <RandomJokeButton />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
