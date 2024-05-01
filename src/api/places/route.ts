import { NextResponse } from "next/server";
import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

export async function GET(req: Request) {
    try {
        const url = new URL(req.url);
        const category = url.searchParams.get("category") as string;
        const latitude = url.searchParams.get("lat") as string;
        const longitude = url.searchParams.get("lng") as string;

        const response = await axios(BASE_URL +
            '/nearbysearch/json?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=' +
            category + '&location=' + latitude + ',' + longitude + '&radius=5000&key='
            + GOOGLE_API_KEY);

        const data = response.data;
        return NextResponse.json(data);
    } catch (error) {
        console.log("[POST_EVENTS]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}