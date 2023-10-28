import { NextResponse } from 'next/server';

export const GET = async () => {
	return NextResponse.json('Instagram posts by nextjs/api');
};
