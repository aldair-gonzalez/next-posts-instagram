import Image from 'next/image';
import Link from 'next/link';

const getFeed = async () => {
	const { INSTAGRAM_KEY } = process.env;
	const url = `https://graph.instagram.com/me/media?fields=id,username,caption,media_url,timestamp,media_type,permalink&access_token=${INSTAGRAM_KEY}`;
	const data = await fetch(url);
	const res = data.json();
	return res;
};

export default async function Page({ children }) {
	const feed = await getFeed();
	const images = await feed.data;

	return (
		<main className="w-screen min-h-screen overflow-x-hidden">
			<div className="w-11/12 mx-auto">
				<div className="w-full">
					<h1 className="mt-5 text-center uppercase font-black text-2xl">
        Instagram posts
					</h1>
					<div className="w-full mt-10">
						{
							images && images.map((image) => (
								<Link key={image.id} href={image.permalink} target='_blank'>
									<Image
										src={image.media_url}
										width={500}
										height={500}
										alt={image.media_type}
									/>
								</Link>
							))
						}
					</div>
				</div>
				{ children }
			</div>
		</main>
	);
}
