import type { ComponentProps } from 'react';

export function Link(props: ComponentProps<'a'>) {
	return (
		<a
			className="text-yellow-500 underline decoration-dotted hover:no-underline"
			{...props}
		/>
	);
}
