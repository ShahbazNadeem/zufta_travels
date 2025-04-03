"use client";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blogSlides } from "@/jsonData/Data"; // Make sure your path is correct

export default function BlogPost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state for better control
    const router = useRouter();
    const { slug } = router.query; // Get slug from the URL

    useEffect(() => {
        if (slug) {
            const blogData = blogSlides.find((post) => post.slug === slug);
            if (blogData) {
                setData(blogData);
            } else {
                setData(null); // Handle if the slug is not found
            }
            setLoading(false); // Stop loading once data is fetched
        }
    }, [slug]);

    if (loading) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    if (!data) {
        return (
            <div className="text-center mt-10">
                <h2>Blog Post Not Found</h2>
                <p>Sorry, we couldn't find the blog post you're looking for.</p>
            </div>
        );
    }

    return (
        <Layout>
            <Head>
                <title>{data.title}</title>
            </Head>
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center">{data.title}</h1>
                <h1>{slug}</h1>
                <p className="text-gray-500 text-center">{data.date} • {data.duration}</p>
                <div className="relative w-full h-64 mt-6">
                    <Image src={data.image} alt={data.title} layout="fill" className="object-cover rounded-lg" />
                </div>
                <div className="mt-6">
                    <p className="text-lg">{data.content || 'This is the content of the blog post...'}</p>
                </div>
            </div>
        </Layout>
    );
}
