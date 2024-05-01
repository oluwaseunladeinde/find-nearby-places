import Image from 'next/image';
import React from 'react'

type Category = {
    id: number;
    name: string;
    value: string;
    icon: string;
}

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = (props: CategoryItemProps) => {
    return (
        <div className='flex flex-col items-center bg-purple-100 p-3 rounded-2xl hover:scale-105 transition-all w-[90px] duration-100 cursor-pointer'>
            <Image src={props.category.icon}
                alt={props.category.name}
                width={35}
                height={35}
            />
            <h2 className='text-[12px] text-purple-700 line-clamp-1'>{props.category.name}</h2>
        </div>
    )
}

export default CategoryItem