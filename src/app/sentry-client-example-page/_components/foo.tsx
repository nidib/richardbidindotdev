'use client';

export default function Foo() {
	return (
		<button
			type="button"
			onClick={() => {
				// @ts-ignore
				window.nah();
			}}
		>
			hello
		</button>
	);
}
