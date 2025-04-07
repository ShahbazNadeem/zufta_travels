import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

const TourCards = ({ data = [] }) => {
    const [visibleCount, setVisibleCount] = useState(9);

    const handleShowMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    if (!Array.isArray(data) || data.length === 0) {
        return <div>No tours available.</div>;
    }

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center w-full">
                {data?.slice(0, visibleCount).map((items, index) => (
                    <Link href={items.link} className={`relative m-1 h-[250px] md:h-[300px] lg:h-[440px] ${index === 0 ? 'w-[91%] lg:w-[98%]' : 'w-[45%] lg:w-[24%]'}`} key={index}>
                        <div className="absolute inset-0 -z-10">
                            <Image src={items.image} fill className="object-cover" alt={items.title} />
                        </div>
                        <div className="relative inset-0 -z-10 flex flex-col justify-end h-full px-3 pb-3">
                            <h3 className="text-white">{items.title}</h3>
                            <div className="flex flex-wrap gap-1 md:gap-2 text-[#B8B8B8] text-[13px] md:text-[16px] w-full">
                                <span>{items.duration}</span>
                                <span>From Rs{items.price}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {visibleCount < data.length && (
                <button
                    onClick={handleShowMore}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Show More
                </button>
            )}
        </div>
    );
};

export default TourCards;
