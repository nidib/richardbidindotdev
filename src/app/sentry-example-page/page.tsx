'use client';

import { useEffect } from 'react';

export default function Foo() {
	useEffect(() => {
		// @ts-ignore
		window.notReal();
	}, []);
	return <p>hello</p>;
}
