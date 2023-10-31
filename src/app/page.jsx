export default async function Page({ children }) {
	return (
		<main className="w-screen min-h-screen overflow-x-hidden">
			<div className="w-11/12 mx-auto">
				{ children }
			</div>
		</main>
	);
}
