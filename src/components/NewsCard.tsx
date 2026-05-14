import React from "react";
import Image from 'next/image';
import { News } from '@/types/news';

interface NewsCardProps {
    newsItem: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ newsItem }) => {
    return (
        <div className="flex flex-col bg-[#E1DDD5] bg-opacity-30 rounded-3xl shadow-md overflow-hidden mb-10 w-full h-[32rem] mx-auto">
            <div className="relative h-1/2 w-full">
                <Image
                    src="/advertisement_placeholder.jpg" // Replace with newsItem.imageUrl when available
                    alt={newsItem.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-full flex flex-col h-1/2 items-center p-4">
                <div className="text-xs font-kanit text-gray-700">{newsItem.Description}</div>
            </div>
        </div>
    );
}

export default NewsCard;
