import { NextResponse } from 'next/server';

export async function GET() {
    try {
        // Get Spotify credentials from environment variables (server-side only)
        const client_id = process.env.SPOTIFY_CLIENT_ID;
        const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

        // Debug: Log environment variables (remove this after testing)
        console.log('Environment variables check:', {
            SPOTIFY_CLIENT_ID: client_id ? 'SET' : 'NOT SET',
            SPOTIFY_CLIENT_SECRET: client_secret ? 'SET' : 'NOT SET'
        });

        // Check if environment variables are set
        if (!client_id || !client_secret) {
            throw new Error('Spotify API credentials not configured. Please set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET environment variables.');
        }

        // Get access token
        const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64')
            },
            body: 'grant_type=client_credentials'
        });

        if (!tokenResponse.ok) {
            throw new Error('Failed to get access token');
        }

        const tokenData = await tokenResponse.json();

        // Search for AnEndlessOcean tracks
        const searchResponse = await fetch(
            `https://api.spotify.com/v1/search?q=artist:AnEndlessOcean&type=track&limit=6`,
            {
                headers: {
                    'Authorization': `Bearer ${tokenData.access_token}`
                }
            }
        );

        if (!searchResponse.ok) {
            throw new Error('Failed to fetch tracks');
        }

        const searchData = await searchResponse.json();

        // Get album images for hero section
        const albumImages = searchData.tracks.items
            .filter((track: { album: { images: { url: any; }[]; }; }) => track.album?.images?.[0]?.url)
            .slice(0, 3)
            .map((track: { album: { images: { url: any; }[]; }; }) => track.album.images[0].url);

        return NextResponse.json({
            success: true,
            tracks: searchData.tracks.items,
            heroImages: albumImages
        });

    } catch (error) {
        console.error('Spotify API error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return NextResponse.json({
            success: false,
            error: errorMessage,
            tracks: []
        }, { status: 500 });
    }
}