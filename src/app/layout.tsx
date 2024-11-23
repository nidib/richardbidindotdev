import type { Metadata } from 'next';
import './globals.css';

const title = 'Richard Bidin';
const description =
	'Senior Full Stack Engineer with a passion for creating exceptional developer and user experiences.';

export const metadata: Metadata = {
	title,
	description,
	openGraph: {
		description,
		title,
		url: 'https://richardbidin.dev',
	},
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
