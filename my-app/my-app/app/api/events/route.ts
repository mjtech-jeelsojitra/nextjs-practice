/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from "next/server";
import Event from "@database/event.model";
import connectDB from "@/lib/database"
import { v2 as cloudinary } from 'cloudinary';

export async function POST(req: NextRequest) {
    try {
        await connectDB()
        const formdata = await req.formData();
        let event;
        try {
            event = Object.fromEntries(formdata);
        } catch (e) {
            return NextResponse.json({ massage: 'invalid JSON data format' }, { status: 400 })
        }
        const file = formdata.get('image') as File;
        if (!file) {
            return NextResponse.json({ massage: 'Image file is required' }, { status: 400 })
        }
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadResult = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'devEvent' }, (error, results) => {
                if (error) {
                    return reject(error);
                    resolve(results);
                }
            }).end(buffer);
        });

        event.image = (uploadResult as { secure_url: string }).secure_url;

        const createdEvent = await Event.create(event)
        return NextResponse.json({ massage: 'Event Created successfully', event: createdEvent }, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ massage: 'Event Creation Faild', error: e instanceof Error ? e.message : 'Unknown' }, { status: 500 })
    }
}

export async function GET() {
    try {
        await connectDB();
        const events = await Event.find().sort({ createdAt: -1 });
        return NextResponse.json({ massage: 'Events fetched successfully', events }, { status: 200 });
    } catch (e) {
        return NextResponse.json({ massage: 'Failed to fetch events', error: e }, { status: 500 });
    }
}
