'use client';

import * as Sentry from '@sentry/nextjs';
import NextError from 'next/error';
import { useEffect } from 'react';

type Props = {
	error: Error & {
		digest?: string;
	};
};

export default function GlobalError({ error }: Props) {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html lang="en-US">
			<body className="w-[100dvw] h-[100dvh] flex items-center justify-center">
				<h1>Something went wrong!</h1>
			</body>
		</html>
	);
}
