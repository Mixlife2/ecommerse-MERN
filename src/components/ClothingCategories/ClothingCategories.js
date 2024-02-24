import React from 'react';
import { Link } from 'react-router-dom';

const ClothingCategories = () => {
  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid gap-1">
          <h1 className="text-3xl font-bold tracking-tight">Shop by Category</h1>
          <p className="text-gray-500 dark:text-gray-400">Discover the perfect gear for your favorite activities.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          <div className="grid gap-4 relative group">
            <Link to="/clothing/running">
              <a className="absolute inset-0 z-10" aria-label="View Running">
                <span className="sr-only">View Running</span>
              </a>
            </Link>
            <img
              alt="Running"
              className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/running.jpg"
              width={500}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Running</h3>
              <p className="text-sm leading-none">Everything you need for every mile.</p>
            </div>
            <p className="font-semibold underline underline-offset-4">Shop</p>
          </div>
          <div className="grid gap-4 relative group">
            <Link to="/clothing/yoga">
              <a className="absolute inset-0 z-10" aria-label="View Yoga">
                <span className="sr-only">View Yoga</span>
              </a>
            </Link>
            <img
              alt="Yoga"
              className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/yoga.jpg"
              width={500}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Yoga</h3>
              <p className="text-sm leading-none">Find your flow with the perfect gear.</p>
            </div>
            <p className="font-semibold underline underline-offset-4">Shop</p>
          </div>
          <div className="grid gap-4 relative group">
            <Link to="/clothing/hiking">
              <a className="absolute inset-0 z-10" aria-label="View Hiking">
                <span className="sr-only">View Hiking</span>
              </a>
            </Link>
            <img
              alt="Hiking"
              className="rounded-lg object-cover w-full aspect-[16/9] group-hover:opacity-50 transition-opacity"
              height={300}
              src="/hiking.jpg"
              width={500}
            />
            <div className="grid gap-1">
              <h3 className="font-semibold">Hiking</h3>
              <p className="text-sm leading-none">Explore the great outdoors with confidence.</p>
            </div>
            <p className="font-semibold underline underline-offset-4">Shop</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClothingCategories;
