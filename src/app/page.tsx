import { getNearByPlaces } from "@/actions/get-nearby-places";
import BusinessList from "@/components/business-list";
import CategoryList from "@/components/category-list";
import SearchBar from "@/components/search-bar";
import SideNavBar from "@/components/sidebar";
import { getNearByPlace } from "@/services/global-api";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home = async () => {

  const places = await getNearByPlaces({
    category: 'gas_station',
    latitude: '6.601830',
    longitude: '3.365340',
  });

  const results = places.results;

  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
        {/* Business List */}
        <div>
          <SearchBar />
          <CategoryList setSelectedCategory={''} />
          <BusinessList businessPlaces={results} />
        </div>

        {/* Google Map */}
        <div>
          Google Map
        </div>
      </div>
    </div>
  );
}

export default Home;
