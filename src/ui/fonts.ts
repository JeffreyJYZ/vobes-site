import localFont from "next/font/local";

export const sfPro = localFont({
	src: [
		{
			path: "../../public/fonts/sf-pro/SF-Pro.ttf",
			weight: "100 900",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-pro/SF-Pro-Italic.ttf",
			weight: "100 900",
			style: "italic",
		},
	],
	variable: "--font-sf-pro",
	display: "swap",
});

export const sfMono = localFont({
	src: [
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Light.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-LightItalic.otf",
			weight: "300",
			style: "italic",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-RegularItalic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-MediumItalic.otf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Semibold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-SemiboldItalic.otf",
			weight: "600",
			style: "italic",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-Heavy.otf",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/sf-mono/SF-Mono-HeavyItalic.otf",
			weight: "800",
			style: "italic",
		},
	],
	variable: "--font-sf-mono",
	display: "swap",
});
