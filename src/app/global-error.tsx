'use client';

import * as Sentry from '@sentry/nextjs';
import { JetBrains_Mono } from 'next/font/google';
import { useEffect } from 'react';
import './globals.css';

type Props = {
	error: Error & {
		digest?: string;
	};
};

const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetmono',
	fallback: ['monospace'],
});

export default function GlobalError({ error }: Props) {
	const id = crypto.randomUUID();

	useEffect(() => {
		Sentry.captureException(error, {
			event_id: id,
		});
	}, [error, id]);

	return (
		<html lang="en-US">
			<body
				className={`${jetBrainsMono.variable} antialiased font-jetmono w-[100dvw] h-[100dvh] flex items-center justify-center`}
			>
				<h1>Something went wrong! ({id})</h1>
			</body>
		</html>
	);
}
