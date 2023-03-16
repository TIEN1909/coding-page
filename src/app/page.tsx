import Image from "next/image";
import { Inter } from "next/font/google";
import Brand from "../../components/Top/Brand/Brand";
import Seller from "../../components/Products/Seller/Seller";
import Guide from "../../components/Top/Guide/Guide";
import Advantages from "../../components/Top/Advantages/Advantages";
import Collection from "../../components/Products/Collection/Collection";
import Testimonial from "../../components/Top/Testimonial/Testimonial";
import Blog from "../../components/Blog/Blog/Blog";
import Community from "../../components/Products/Community/Community";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Brand />
      <Seller />
      <Guide />
      <Advantages img="image" ingredient="Some ingredient" desc="Description" />
      <Collection image="image" face="face" name="name" price="price" />
      <Testimonial />
      <Blog />
      <Community />
    </>
  );
}
