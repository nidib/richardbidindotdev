export default function Foo() {
	if (process.env.NODE_ENV !== 'production') {
		// @ts-ignore
		window.nah();
	}

	return <p>hello</p>;
}
