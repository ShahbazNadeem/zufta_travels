import { useState } from "react";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/Banner";
import Image from "next/image";
import CountUp from "react-countup";
import payment1 from "@/images/aboutus/payment1.png";
import payment2 from "@/images/aboutus/payment2.png";
import payment3 from "@/images/aboutus/payment3.png";
import payment4 from "@/images/aboutus/payment4.png";
import payment5 from "@/images/aboutus/payment5.png";
import adventureImg from "@/images/planMyTrip/adventureImg.png";
import "./planmytrip.css";
import NewsAndTips from "@/components/NewsAndTips";
import { newsandtips } from "@/jsonData/Data";
import { accordianData } from "@/jsonData/Data";
import img from "@/images/planMyTrip/img.png";
import Frame68 from "@/images/Frame68.png";
import naran from "@/images/naran.jpeg";
import AccordianWithSelection from "@/components/AccordianWithSelection";
import Head from "next/head";
import { FaCalendarAlt } from "react-icons/fa"
import axios from "axios";

const index = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [formdata, setFormData] = useState({
    FirstName: '',
    lastname: '',
    email: '',
    phone: "",
    nationality: '',
    tourType: '',
    numberOfParticipants: '',
    numberOfDays: '',
    numberOfRooms: '',
    FromFromFromDate: '',
    destination: '',
    message: ''
});
const prepareFormData = () => {
  return {
    ...formdata,
    tourType: parseInt(formdata.tourType) || null,
    numberOfParticipants: parseInt(formdata.numberOfParticipants) || null,
    numberOfDays: parseInt(formdata.numberOfDays) || null,
    numberOfRooms: parseInt(formdata.numberOfRooms) || null,
  };
};
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));

};
  const images = [img, Frame68, naran];
  const handleForm = async (e) => {
    e.preventDefault()
    console.log(formdata, 'res')
    const dataToSend = prepareFormData();
    try{
      const response = await axios.post('https://192.168.100.177:45455/api/Tours/Contact',dataToSend)
      console.log(response.data, 'res');
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };
  return (
    <Layout>  
      <Head>
        <title>Plan My Trip</title>
      </Head>
      <section>
        <div className="wrapper-P1">
          <Banner title="Plan My Trip" />
        </div>
      </section>
      <section>
        <div className="wrapper-P2 mt-10 lg:mt-20 max-w-[1440px] mx-auto">
          <div className="container">
            <div className="flex flex-col gap-10 md:gap-0 md:flex-row mx-5">
              <div className="basis-1/2 flex justify-center items-center">
                <figure className="w-[50%] md:w-[90%] h-auto">
                  <Image
                    src={adventureImg}
                    alt="img"
                    className="w-full h-full"
                  />
                </figure>
              </div>
              <div className="basis-1/2 flex flex-col">
                <h2>Let's Plan Your Adventure</h2>
                <p>You need to come at least once in your life</p>
                <form
                  onSubmit={handleForm}
                  className="flex flex-col gap-2 lg:gap-4 mt-8 lg:mt-14"
                >
                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input
                        type="text"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="FirstName"
                        name="FirstName"
                        value={formdata.FirstName}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="FirstName"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        First Name *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input
                        type="text"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="lastname"
                        name="lastname"
                        value={formdata.lastname}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="lastName"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Last Name *
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input
                        type="email"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="email"
                        name="email"
                        value={formdata.email}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="email"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Email address *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input
                        type="number"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="phone"
                        name="phone"
                        value={formdata.phone}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="phoneNumber"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Phone number *
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input
                        type="text"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="nationality"
                        name="nationality"
                        value={formdata.nationality}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="nationality"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Nationality *
                      </label>
                    </div>
                    <div className="basis-1/2">
                      <select id="tourType" name="tourType"  value={formdata.tourType} onChange={handleChange} className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]">
                        <option value="">Select type of tour</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input
                        type="number"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="numberOfParticipants"
                        name="numberOfParticipants"
                        value={formdata.numberOfParticipants}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="numberOfParticipants"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Number of participants *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input
                        type="number"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="numberOfDays"
                        name="numberOfDays"
                        value={formdata.numberOfDays}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="numberOfDays"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Number of days *
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2 lg:gap-4">
                    <div class="relative basis-1/2">
                      <input
                        type="number"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="numberOfRooms"
                        name="numberOfRooms"
                        value={formdata.numberOfRooms}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="numberOfRooms"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Number of rooms *
                      </label>
                    </div>
                    <div class="relative basis-1/2">
                      <input
                       value={formdata.FromDate}
                       onChange={handleChange}
                        type="date"
                        name="FromDate"
                        // value={new FromDate().toISOString().split('T')[0]}
                        className="rounded-lg w-full py-3 pl-10 border-2 border-gray-300 focus:outline-none"
                      />
                      <FaCalendarAlt className="absolute left-3 top-4 text-gray-500" />
                    </div>
                  </div>

                  <div className="">
                    <div class="relative basis-1/2">
                      <input
                        type="text"
                        class="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer focus:border-[#1A2B48]"
                        placeholder=" "
                        id="destination"
                        name="destination"
                        value={formdata.destination}
                        onChange={handleChange}
                        required
                      />
                      <label
                        for="preferredDestination"
                        class="absolute peer-focus:bg-[#F8F8F8] text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:textColor2 textColor2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                      >
                        Preferred destination *
                      </label>
                    </div>
                  </div>

                  <textarea
                    class="block px-2.5 pb-2.5 pt-4 w-full h-[150px] text-sm bg-transparent rounded-lg border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer focus:border-[#1A2B48] placeholder-[#1A2B48]"
                    placeholder="Tell us more about what you’re planning*"
                    id="message"
                    name="message"
                    value={formdata.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button type="submit" className="font-marcellus text-[16px] text-white w-full h-[46px] rounded-[30px] flex justify-center items-center px-[120px] py-[13px]">
                    Send a request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="warpper-P3 mt-10 lg:mt-20 max-w-[1440px] mx-auto">
          <div className="container flex flex-col gap-5 px-5">
            <div className="flex flex-col lg:flex-row bg-[#f0f0e5]">
              <div className="basis-1/2 flex justify-center items-center">
                <div>
                  <div className="flex">
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">
                          <CountUp
                            start={0}
                            end={168}
                            duration={4.5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                          k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">
                          Happy Clients
                        </span>
                      </div>
                    </div>
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">
                          +
                          <CountUp
                            start={0}
                            end={45}
                            duration={4.5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                          k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">
                          Destinations
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">
                          +
                          <CountUp
                            start={0}
                            end={49}
                            duration={4.5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">
                          Global Search
                        </span>
                      </div>
                    </div>
                    <div className="lg:basis-1/2 flex justify-center items-center p-5 md:p-10">
                      <div className="flex justify-center items-center flex-col">
                        <span className="text-[28px] md:text-[48px] lg:text-[64px] font-marcellus textColor2">
                          +
                          <CountUp
                            start={0}
                            end={26}
                            duration={4.5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                          />
                          k
                        </span>
                        <span className="text-[16px] md:text-[18px] lg:text-[20px] font-manrope textColor2">
                          Destinations
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="basis-1/2 flex justify-center items-center gap-5 py-7 px-5">
                <div className="flex gap-5">
                  <div className="flex items-center">
                    <figure>
                      <Image src={payment1} alt="img" />
                    </figure>
                  </div>
                  <div className="flex flex-col gap-5">
                    <figure>
                      <Image src={payment2} alt="img" />
                    </figure>
                    <figure>
                      <Image src={payment3} alt="img" />
                    </figure>
                  </div>
                  <div className="flex flex-col gap-2">
                    <figure>
                      <Image src={payment4} alt="img" />
                    </figure>
                    <figure>
                      <Image src={payment5} alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 premiumGroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">
                Explore Premium Group Tours
              </div>
              <div className="basis-1/2 flex justify-center items-center px-10 md:px-16 lg:px-20 py-18 md:py-22  lg:py-28 privateDroup text-[20px] md:text-[28px] lg:text-[32px] font-marcellus textColor2">
                Explore Private Group Tours
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-P4 mt-10 lg:mt-20 max-w-[1440px] mx-auto">
          <div className="container">
            <div className="flex flex-col gap-3 sm:gap-8 px-5">
              <h2>Frequently Asked Questions</h2>
              <p>You need to come at least once in your life</p>
              <div className="flex flex-col md:flex-row pt-6">
                {/* Image Section */}
                <div className="md:basis-1/2 flex justify-center items-center">
                  <figure className="w-[200px] sm:w-[300px] md:w-[330px] lg:w-full">
                    <Image
                      src={images[selectedIndex] || images[0]}
                      width={500}
                      height={300}
                      alt="Carousel Image"
                      className="w-full h-full"
                    />
                  </figure>
                </div>

                {/* Accordion Section */}
                <div className="md:basis-1/2 md:px-5 lg:px-10 mt-10 lg:mt-0 flex justify-center items-start">
                  <AccordianWithSelection
                    data={accordianData}
                    onSelect={(index) => setSelectedIndex(index ?? 0)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-P5 my-10 lg:my-20">
          <div className="container">
            <div className="max-w-[1440px] mx-auto">
              <NewsAndTips newsandtips={newsandtips} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default index;
