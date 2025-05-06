import author from "@/images/aboutus/author.png";
import payment1 from "@/images/aboutus/payment1.png";
import payment2 from "@/images/aboutus/payment2.png";
import naran from "@/images/naran.jpeg";
import hunza from "@/images/hunza.jpeg";
import sawat from "@/images/sawat.jpeg";
import neelam from "@/images/neelam.jpeg";
import Vector1 from "@/images/home/Vector1.png";
import Vector2 from "@/images/home/Vector2.png";
import Vector3 from "@/images/home/Vector3.png";
import Vector4 from "@/images/home/Vector4.png";
import Vector5 from "@/images/home/Vector5.png";
import img from "@/images/home/designYurTrip.jpeg";
import tourimg from "@/images/tourdetail/Star1.png";
import { time } from "framer-motion";
import news1 from "@/images/aboutus/news1.png"
import news2 from "@/images/aboutus/news2.png"
import news3 from "@/images/aboutus/news3.png"

export const sliderData1 = [
  {
    id: 1,
    title: "Sara Mohamed",
    rating: "⭐⭐⭐⭐⭐",
    para: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    image: payment1,
  },
  {
    id: 2,
    title: "Sara Mohamed",
    rating: "⭐⭐⭐",
    para: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    image: author,
  },
  {
    id: 3,
    title: "Sara Mohamed",
    rating: "⭐⭐",
    para: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    image: payment2,
  },
  {
    id: 4,
    title: "Sara Mohamed",
    rating: "⭐⭐⭐⭐⭐",
    para: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    image: payment1,
  },
  {
    id: 5,
    title: "Sara Mohamed",
    rating: "⭐⭐⭐⭐",
    para: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
    image: author,
  },
];

export const homePartners = [
  {
    id: 1,
    image: Vector1,
  },
  {
    id: 2,
    image: Vector2,
  },
  {
    id: 3,
    image: Vector3,
  },
  {
    id: 4,
    image: Vector4,
  },
  {
    id: 5,
    image: Vector4,
  },
];

export const homeTourPickup = [
  {
    id: 1,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
  },
  {
    id: 2,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
  },
  {
    id: 3,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
  },
  {
    id: 4,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
  },
  {
    id: 5,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
  },
  {
    id: 6,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
  },
  {
    id: 7,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
  },
  {
    id: 8,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
  },
];

export const accordianData = [
  {
    title: "How do I make a reservation on your website",
    content:
      "Provide a step-by-step guide on how users can browse and book travel services on your platform. Include information on searching for destinations, selecting dates, choosing accommodation, and completing the booking process. Mention any special features or tools that can help users find the best deals.",
  },
  {
    title: "How do I make a reservation on your website",
    content:
      "It applies classNamees to elements for styling instead of writing custom CSS.",
  },
  {
    title: "How do I make a reservation on your website",
    content: "Yes! Tailwind provides responsive classNamees out of the box.",
  },
  {
    title: "How do I make a reservation on your website",
    content: "Yes! Tailwind provides responsive classNamees out of the box.",
  },
  {
    title: "How do I make a reservation on your website",
    content: "Yes! Tailwind provides responsive classNamees out of the box.",
  },
];

export const blogSlides = [
  {
    slug: "blog1",
    image: img,
    category: "Discovery",
    title: "Ultimate Travel Planning Guide: 10 Tips For A Seamless Journey",
    date: "18 Sep 2024",
    duration: "1 min",
    link: "/blog/blog1",
  },
  {
    slug: "blog2",
    image: img,
    category: "Discovery",
    title: "Exploring Hidden Nature Spots: A Guide for Adventurers",
    date: "20 Sep 2024",
    duration: "2 mins",
    link: "/blog/blog2",
  },
  {
    slug: "blog3",
    image: img,
    category: "Discovery",
    title: "The Most Scenic Landscapes to Visit This Year",
    date: "22 Sep 2024",
    duration: "3 mins",
    link: "/blog/blog3",
  },
  {
    slug: "blog4",
    image: img,
    category: "Adventure",
    title: "Top 5 Destinations for Solo Travelers in 2024",
    date: "25 Sep 2024",
    duration: "4 mins",
    link: "/blog/blog4",
  },
  {
    slug: "blog5",
    image: img,
    category: "Travel Tips",
    title: "How to Pack Smart: Essential Packing Hacks for Every Trip",
    date: "27 Sep 2024",
    duration: "2 mins",
    link: "/blog/blog5",
  },
  {
    slug: "blog6",
    image: img,
    category: "Food & Travel",
    title: "Tasting the World: Best Street Foods to Try in 2024",
    date: "30 Sep 2024",
    duration: "3 mins",
    link: "/blog/blog6",
  },
  {
    slug: "blog7",
    image: img,
    category: "Nature",
    title: "Eco-Friendly Travel: How to Explore Sustainably",
    date: "02 Oct 2024",
    duration: "4 mins",
    link: "/blog/blog7",
  },
  {
    slug: "blog8",
    image: img,
    category: "Photography",
    title: "Capturing the Perfect Travel Shot: A Beginner’s Guide",
    date: "05 Oct 2024",
    duration: "3 mins",
    link: "/blog/blog8",
  },
  {
    slug: "blog9",
    image: img,
    category: "Luxury Travel",
    title: "5 Most Luxurious Resorts for an Unforgettable Vacation",
    date: "08 Oct 2024",
    duration: "5 mins",
    link: "/blog/blog9",
  },
  {
    slug: "blog10",
    image: img,
    category: "Cultural Exploration",
    title: "Experiencing Local Cultures: A Guide for Respectful Travelers",
    date: "10 Oct 2024",
    duration: "4 mins",
    link: "/blog/blog10",
  },
];

export const byAirTourPickup = [
  {
    id: 1,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/byair/naran-kaghan",
  },
  {
    id: 2,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza",
  },
  {
    id: 3,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/byair/swat-kalam",
  },
  {
    id: 4,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/byair/neelam-valley",
  },
  {
    id: 5,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/byair/swat-kalam-2",
  },
  {
    id: 6,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/byair/neelam-valley-2",
  },
  {
    id: 7,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/byair/naran-kaghan-2",
  },
  {
    id: 8,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza-2",
  },
  {
    id: 9,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza-3",
  },
  {
    id: 10,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza-4",
  },
  {
    id: 11,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza-5",
  },
  {
    id: 12,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/byair/hunza-6",
  },
];
export const privatetourPickup = [
  {
    id: 1,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/privatetour/naran-kaghan",
  },
  {
    id: 2,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza",
  },
  {
    id: 3,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/privatetour/swat-kalam",
  },
  {
    id: 4,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/privatetour/neelam-valley",
  },
  {
    id: 5,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/privatetour/swat-kalam-2",
  },
  {
    id: 6,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/privatetour/neelam-valley-2",
  },
  {
    id: 7,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/privatetour/naran-kaghan-2",
  },
  {
    id: 8,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza-2",
  },
  {
    id: 9,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza-3",
  },
  {
    id: 10,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza-4",
  },
  {
    id: 11,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza-5",
  },
  {
    id: 12,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/privatetour/hunza-6",
  },
];

export const premiumTourPickup = [
  {
    id: 1,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/premiumtour/naran-kaghan",
  },
  {
    id: 2,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza",
  },
  {
    id: 3,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/premiumtour/swat-kalam",
  },
  {
    id: 4,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/premiumtour/neelam-valley",
  },
  {
    id: 5,
    title: "Swat Kalam",
    image: sawat,
    duration: "5 days trip",
    price: "125,000",
    link: "/premiumtour/swat-kalam-2",
  },
  {
    id: 6,
    title: "Neelam Valley",
    image: neelam,
    duration: "5 days trip",
    price: "85,000",
    link: "/premiumtour/neelam-valley-2",
  },
  {
    id: 7,
    title: "Naran Kaghan",
    image: naran,
    duration: "5 days trip",
    price: "105,000",
    link: "/premiumtour/naran-kaghan-2",
  },
  {
    id: 8,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza-2",
  },
  {
    id: 9,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza-3",
  },
  {
    id: 10,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza-4",
  },
  {
    id: 11,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza-5",
  },
  {
    id: 12,
    title: "Hunza",
    image: hunza,
    duration: "4 days trip",
    price: "95,000",
    link: "/premiumtour/hunza-6",
  },
];

export const tourDetails = [
  {
    title: "Destination",
    data: "Tour Name",
    img: tourimg,
  },
  {
    title: "Departure",
    data: "Islamabad",
    img: tourimg,
  },
  {
    title: "Included",
    data: "Complete Guidance, Accommodation, Hygienic Breakfast, Expert & Native Driver",
    img: tourimg,
  },
  {
    title: "Not Included",
    data: "Air Tickets, Mattress Charges, Candle Light Dinner (on demand)",
    img: tourimg,
  },
];

export const pricingToyota = [
  {
    id: 1,
    title: "Standard",
    price: "105,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 2,
    title: "Deluxe",
    price: "105,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 3,
    title: "Premium",
    price: "105,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 4,
    title: "Executive",
    price: "105,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
];

export const pricingHondaBrv = [
  {
    id: 1,
    title: "Standard",
    price: "205,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 2,
    title: "Deluxe",
    price: "2,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 3,
    title: "Premium",
    price: "205,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
  {
    id: 4,
    title: "Executive",
    price: "205,000",
    hotel:
      "1 Night in Eagle Nest, in Malam Jabba. 2 Nights in Royal Continental, in Kalam.",
  },
];

export const dashboardhistory = [
  {
    id: 1,
    tourname: "Swat Kalam",
    content:
      "Aliquam ligula lectus, efficitur non pretium quis, elementum quis sapien. Nunc dapibus mi vitae mi placerat eleifend.",
    time: '5 days',
    price: 'Rs.125,000',
    room: 'Premium',
    img: naran,
  },
  {
    id: 2,
    tourname: "Swat Kalam",
    content:
      "Aliquam ligula lectus, efficitur non pretium quis, elementum quis sapien. Nunc dapibus mi vitae mi placerat eleifend.",
    time: '5 days',
    price: 'Rs.125,000',
    room: 'Delux',
    img: naran,
  },
  {
    id: 3,
    tourname: "Swat Kalam",
    content:
      "Aliquam ligula lectus, efficitur non pretium quis, elementum quis sapien. Nunc dapibus mi vitae mi placerat eleifend.",
    time: '5 days',
    price: 'Rs.125,000',
    room: 'Delux',
    img: naran,
  },
  {
    id: 4,
    tourname: "Swat Kalam",
    content:
      "Aliquam ligula lectus, efficitur non pretium quis, elementum quis sapien. Nunc dapibus mi vitae mi placerat eleifend.",
    time: '5 days',
    price: 'Rs.125,000',
    room: 'Delux',
    img: naran,
  },
];

export const newsandtips=[
  {
    id: 1,
    title: 'Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey',
    date: '18 Sep 2024',
    time: '6 mins',
    category: 'Culture',
    img: news1,
  },
  {
    id: 2,
    title: 'Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey',
    date: '18 Sep 2024',
    time: '6 mins',
    category: 'Culture',
    img: news2,
  },
  {
    id: 3,
    title: 'Ultimate Travel Planning Guide: 10 Tips for a Seamless Journey',
    date: '18 Sep 2024',
    time: '6 mins',
    category: 'Culture',
    img: news3,
  },
]
