'use client'

import React, { useEffect, useState } from 'react'
import BusinessItem from './business-item';

type BusinessPlace = {
    business_status: string;
    geometry: {
        location: any;
        viewport: any;
    },
    icon: string;
    icon_background_color: string;
    icon_mask_base_uri: string;
    name: string;
    opening_hours: { open_now: boolean },
    photos: [[Object]],
    place_id: string,
    plus_code: {
        compound_code: string;
        global_code: string
    },
    rating: number,
    reference: string,
    scope: string,
    types: string[];
    user_ratings_total: number;
    vicinity: string;
}

interface BusinessListProps {
    businessPlaces: BusinessPlace[];
}

const BusinessList = ({ businessPlaces }: BusinessListProps) => {

    const [count, setCount] = useState(0);
    const [loader, setLoader] = useState(true);

    console.log({ businessPlaces })

    useEffect(() => {
        setInterval(() => {
            setLoader(false)
        }, 1000)
    }, [])


    // useEffect(() => {
    //     setLoader(true);
    //     setCount(0);
    // }, [businessListData])

    return (
        <div>
            <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
                Top Nearby Places
                <span className="flex">
                    {count > 0 ? <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setCount(count - 3)}
                        className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500
          hover:bg-purple-100 cursor-pointer rounded-lg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg> : null}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => setCount(count + 3)}
                        className="w-10 h-10 p-2 text-gray-400 hover:text-purple-500
          hover:bg-purple-100 cursor-pointer rounded-lg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </h2>
            <div>
                {businessPlaces.map((place, index) =>
                    index >= count && index < count + 3 && (
                        <div key={index}>
                            <BusinessItem place={place} />
                        </div>

                    ))}
            </div>

        </div>
    )
}

export default BusinessList