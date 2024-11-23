import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Richard Bidin',
	icons: ['favicon.png'],
	robots: {
		index: false,
		follow: false,
	},
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
