import type { Metadata } from "next";
import "@/ui/styles/fonts.css";
import "@/ui/styles/font-classes.css";
import "@/ui/styles/variables.css";
import "@/ui/styles/base.css";
import "@/ui/styles/utilities.css";
import "@/ui/styles/headings.css";
import "@/ui/styles/links.css";
import "./globals.css";
import { sfMono, sfPro } from "@/ui/fonts";

export const metadata: Metadata = {
	title: "Vobes: the future of project management",
	description:
		"Manage all your dev projects in one app, with a cli extension and auto-scanning",
	icons: {
		icon: "/media/icon.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${sfMono.variable} ${sfPro.variable}`}>
			<body className="sf-pro text-center m-0 p-0 bg-neutral-900 text-white">
				<main className="pt-20 flex flex-col items-center p-10 border-x-neutral-700 border-x md:mx-40 lg:mx-50 mx-15 min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}