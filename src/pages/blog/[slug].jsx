"use client";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blogSlides } from "@/jsonData/Data";
import { FaChevronRight } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import Link from 'next/link'
import './blog.css'
import NewsAndTips from "@/components/NewsAndTips";
import tourimg from "@/images/tourdetail/Star1.png";

export default function BlogPost() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug) {
            const blogData = blogSlides.find((post) => post.slug === slug);
            if (blogData) {
                setData(blogData);
            } else {
                setData(null);
            }
            setLoading(false);
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

            <section>
                <div className='wrapper'>
                    <div className="max-w-[1920px] bg-[url(/images/bannerimg1.jpeg)] mx-auto bg-center bg-no-repeat bg-cover">
                        <div className="flex flex-col items-center pt-28 pb-18 sm:py-28 lg:py-38 xl:py-56">
                            <h1 className="text-white"></h1>
                            <div className="mt-5 rounded-[33px] px-[20px] py-[10px] gap-[20px] bg-white/70 backdrop-blur-[16px] flex justify-between items-center">
                                <Link href="/">Home</Link>
                                <FaChevronRight size={12} />
                                <Link href="/blog">Blog</Link>
                                <FaChevronRight size={12} />
                                {slug}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper md:pt-20 pt-10 mx-5">
                    <div className="container">
                        <div className="flex flex-col gap-4 md:gap-8">
                            <span>Research Report</span>
                            <h2>{data.title}</h2>
                            <p className="text-lg">{data.content || 'This is the content of the blog post...'}</p>
                            <span className='flex gap-4 items-center'><span className='flex gap-2 items-center'><IoCalendarOutline />{data.date}</span><span className='flex gap-2 items-center'><FaRegClock />{data.duration}</span></span>
                        </div>

                        <div className="md:pt-20 pt-10">
                            <figure><Image src={data.image} alt={data.title} /></figure>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8 md:pt-20 pt-10">
                            <h2>{data.heading1 || "Heading will Appear here"}</h2>
                            <p className="text-lg">{data.description || ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe dicta culpa eos ipsum ad cupiditate tempora sequi vel maxime exercitationem fugit, ea autem vero consequuntur perspiciatis delectus iste. Beatae doloribus totam inventore! Eligendi laboriosam officia repellendus temporibus quam iste fuga facilis neque dolore incidunt dolorum omnis error quidem numquam odio ipsam, hic, obcaecati debitis voluptatem, architecto necessitatibus harum tempora repellat! Beatae, sunt voluptatem! Minima architecto earum tempore sequi veniam nemo quis non maiores, quisquam quidem dolor quia itaque nostrum soluta nulla ea quae voluptatem iste! Placeat possimus veritatis harum id quod eaque magnam, vel nemo ducimus modi tenetur sequi tempora.'}</p>
                            <ul className='flex flex-col gap-3'>
                                <li className='flex gap-2'>
                                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                                        <Image src={tourimg} alt={data.title} className="w-full h-auto" />
                                    </figure>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim ab repellendus odit obcaecati dolorum, ut temporibus aut quidem veniam minima, eligendi incidunt. At dicta eum vel corrupti quae accusamus.</p>
                                </li>
                                <li className='flex gap-2'>
                                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                                        <Image src={tourimg} alt={data.title} className="w-full h-auto" />
                                    </figure>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim ab repellendus odit obcaecati dolorum, ut temporibus aut quidem veniam minima, eligendi incidunt. At dicta eum vel corrupti quae accusamus.</p>
                                </li>
                                <li className='flex gap-2'>
                                    <figure className="w-[15px] md:w-[15px] lg:w-[20px] ">
                                        <Image src={tourimg} alt={data.title} className="w-full h-auto" />
                                    </figure>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum enim ab repellendus odit obcaecati dolorum, ut temporibus aut quidem veniam minima, eligendi incidunt. At dicta eum vel corrupti quae accusamus.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 md:gap-8 max-w-[1240px] mx-auto bg-[#E9E9E966] py-8 md:py-16 md:px-8 lg:p-20 text-center md:mt-20 mt-10">
                            <h2>Heading will Appear here</h2>
                            <p>Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in condimentum.. Sit sapien amet fermentum augue lobortis sed integer sit.. ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in condimentum.. Sit sapien amet fermentum augue lobortis sed integer sit..ntum.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut, necessitatibus ducimus dolorum vero vitae reiciendis asperiores ipsam saepe nemo accusamus fugiat magnam quo modi iusto tempora nam? Veniam, incidunt.</p>
                        </div>

                        <div className="flex flex-col md:flex-row md:my-20 my-10 gap-4 md:gap-8">
                            <div className="flex flex-col gap-4 md:gap-8 md:basis-1/2">
                                <h2>Heading will Appear here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in condimentum..Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in Lorem ipsum dolor sit amet consectetur. Id montes sed rutrum turpis mattis nisi accumsan.. Tempor porttitor cursus aliquet sit lobortis lectus sed sociis a.. Quis sagittis et ultrices aliquet molestie in condimentum..</p>
                                <div>
                                    <Link href='/contactus'>
                                        <button>Contact Us</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center items-center md:basis-1/2">
                                <figure className="w-[70%] md:w-[100%] xl:w-[80%]"><Image src={data.image} alt={data.title} /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="wrapper-H9 md:pt-20 pt-10 bg-white max-w-[1440px] mx-auto px-5">
                    <div className="container">
                        <NewsAndTips />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
