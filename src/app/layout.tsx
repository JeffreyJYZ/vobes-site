import type { Metadata } from "next";
import "@/ui/styles/variables.css";
import "@/ui/styles/base.css";
import "@/ui/styles/utilities.css";
import "@/ui/styles/headings.css";
import "@/ui/styles/links.css";
import "./globals.css";
import { generalSans, satoshi } from "@/ui/fonts";

export const metadata: Metadata = {};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${generalSans.variable} ${satoshi.variable} text-center m-0 p-0 bg-neutral-900 text-white`}
			>
				<main className="pt-20 flex flex-col items-center p-10 border-x-neutral-700 border-x md:mx-40 lg:mx-50 mx-15 min-h-screen">
					{children}
				</main>
			</body>
		</html>
	);
}
