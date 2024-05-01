'use client';

import { getNearByPlaces } from "@/actions/get-nearby-places";
import BusinessList from "@/components/business-list";
import CategoryList from "@/components/category-list";
import SearchBar from "@/components/search-bar";
import SideNavBar from "@/components/sidebar";
import { getNearByPlace } from "@/services/global-api";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place'
const GOOGLE_PLACE_URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY

const getPlaces = async () => {
  const category = 'gas_station';
  const latitude = '6.601830';
  const longitude = '3.365340';
  const url = `${GOOGLE_PLACE_URL}?fields=formatted_address,name,rating,opening_hours,geometry,photos&type=${category}&location=${latitude}%2C${longitude}&radius=5000&key=${GOOGLE_API_KEY}`;
  const response = await axios.get(url);
  const data = response.data;
  return data;
}

const Home = () => {
  const [businessList, setBusinessList] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);


  const info = useQuery({ queryKey: ['places'], queryFn: getPlaces })

  // const places = await getNearByPlaces({
  //   category: 'gas_station',
  //   latitude: '6.601830',
  //   longitude: '3.365340',
  // });

  const results = []//places.results;

  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10 gap-8">
        {/* Business List */}
        <div>
          <SearchBar />
          <CategoryList setSelectedCategory={''} />
          {/* <BusinessList businessPlaces={results} /> */}
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
