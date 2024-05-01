'use client';

import React, { useEffect, useState } from 'react'
import CategoryListData from '../../shared/data';
import CategoryItem from './category-item';

interface CategoryListProps {
    setSelectedCategory: string;
}

const CategoryList = (props: CategoryListProps) => {

    const [category, setCategory] = useState([{
        id: 0,
        name: 'temp',
        value: '',
        icon: ''
    }]);
    const [selectedCategory, setSelectedCategory] = useState<string>();

    useEffect(() => {
        setCategory(CategoryListData)
    }, [])

    return (
        <div>
            <h2 className='text-[20px] mt-3 font-bold mb-3'>Select Your Fav Category</h2>
            {category ? <div className='flex gap-6 mb-5'>
                {category.map((item, index) => (
                    <div key={index} onClick={() => setSelectedCategory(item.name)}>
                        <CategoryItem category={item} />
                    </div>
                ))}
            </div> : null}
        </div>
    )
}

export default CategoryList