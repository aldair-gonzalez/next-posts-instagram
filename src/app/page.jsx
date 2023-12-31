import Image from 'next/image';
import Link from 'next/link';

const getFeed = async () => {
	const { INSTAGRAM_KEY } = process.env;
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink,thumbnail&access_token=${INSTAGRAM_KEY}`;
	const res = await fetch(url);
	const data = await res.json();
	return await data.data;
};

export default async function Page({ children }) {
	const feed = await getFeed();

	return (
		<main className="w-screen min-h-screen overflow-x-hidden">
			<div className="w-11/12 mx-auto">
				<div className="w-full">
					<h1 className="mt-5 text-center uppercase font-black text-2xl">
            Instagram posts
					</h1>
					<p className="text-center mt-5">
            Esta app obtiene las útimas publicaciones del perfil de un usuario
            de Instagram y las muestra en la siguiente galería
					</p>
					<div className="w-full mt-10 grid grid-cols-2 gap-4">
						{feed && feed.map((image) => (
							<Link
								className="Image-Link overflow-hidden w-full h-full relative"
								key={image.id}
								href={image.permalink}
								target="_blank"
							>
								<Image
									className="w-full h-full"
									src={image.media_url}
									alt={image.caption}
									width={1000}
									height={1000}
									unoptimized={true}
									loading='lazy'
								/>
								<div className="Image-Overlay pointer-events-none bg-black bg-opacity-50 text-white font-semibold uppercase text-lg absolute w-full h-full top-0 left-0 flex items-center justify-center text-center">
                  Ver publicación
								</div>
							</Link>
						))}
					</div>
				</div>
				{children}
			</div>
		</main>
	);
}
