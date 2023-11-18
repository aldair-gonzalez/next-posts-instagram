import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], adjustFontFallback: false, preload: true });

export const metadata = {
	title: 'Instagram posts',
	description: 'Obteniendo los últimos posts de un perfil de instagram',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className} suppressHydrationWarning={true}>{children}</body>
		</html>
	);
}
