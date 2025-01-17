import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Content from "@/components/sections/content";
import Footer from "@/components/sections/footer";
import Ipad from "@/components/sections/ipad";

export default function Home() {
    return (
        <main className="relative bg-[#0a0a0a]">
            <Navbar />
            <section id="home" className="relative">
                <Hero />
            </section>
            <section id="content" className="relative">
                <Content />
            </section>
            <section id="ipad" className="relative">
                <Ipad />
            </section>
            <Footer />
        </main>
    );
}
