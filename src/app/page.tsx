import { Caret } from 'src/app/components/caret';
import { Link } from 'src/app/components/link';

export default function Home() {
	return (
		<div>
			<main className="h-[70dvh] flex items-center justify-center">
				<h1 className="text-xl">
					<span className="text-yellow-500">{'<'}</span>coming soon
					<span className="text-yellow-500">{' />'}</span>
				</h1>
				<Caret />
			</main>
			<footer className="h-[30dvh] flex flex-col gap-2 justify-start items-center">
				<Link href="https://linkedin.com/in/richardbidins">linkedIn</Link>
				<Link href="https://github.com/nidib">github</Link>
			</footer>
		</div>
	);
}
