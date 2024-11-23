import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Richard Bidin",
};

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="pt-BR">
			<body className="antialiased">{children}</body>
		</html>
	);
}
