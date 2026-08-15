import localFont from "next/font/local";

export const generalSans = localFont({
	src: [
		{
			path: "../../public/fonts/general-sans/GeneralSans-Variable.woff2",
			weight: "200 700",
			style: "normal",
		},
		{
			path: "../../public/fonts/general-sans/GeneralSans-VariableItalic.woff2",
			weight: "200 700",
			style: "italic",
		},
	],
	variable: "--font-general-sans",
	display: "swap",
});

export const satoshi = localFont({
	src: [
		{
			path: "../../public/fonts/satoshi/Satoshi-Variable.woff2",
			weight: "300 900",
			style: "normal",
		},
		{
			path: "../../public/fonts/satoshi/Satoshi-VariableItalic.woff2",
			weight: "300 900",
			style: "italic",
		},
	],
	variable: "--font-satoshi",
	display: "swap",
});
