export default function Foo() {
	// @ts-ignore
	window.notReal();
	return <p>hello</p>;
}
