import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { headers } from 'next/headers';
import './globals.css';

const title = 'Richard Bidin';
const description =
	'Senior Full Stack Engineer with a passion for creating exceptional developer and user experiences.';

export async function generateMetadata(): Promise<Metadata> {
	const host = (await headers()).get('host');

	return {
		metadataBase: new URL(`https://${host}`),
		title,
		description,
		openGraph: {
			description,
			title,
			images: ['preview.png'],
			url: 'https://richardbidin.dev',
		},
		icons: ['favicon.png'],
		robots: {
			index: false,
			follow: false,
		},
	};
}

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetmono',
	fallback: ['monospace'],
});

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
	return (
		<html lang="pt-BR">
			<body className={`${jetBrainsMono.variable} antialiased font-jetmono`}>
				{children}
			</body>
		</html>
	);
}
