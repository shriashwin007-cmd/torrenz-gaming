"use client";
import { useState } from "react";
import Navbar       from "@/app/components/Navbar";
import Intro        from "@/app/components/Intro";
import Hero         from "@/app/components/Hero";
import Rooms        from "@/app/components/Rooms";
import AddOns       from "@/app/components/AddOns";
import Gallery      from "@/app/components/Gallery";
import Pricing      from "@/app/components/Pricing";
import Booking      from "@/app/components/Booking";
import Location     from "@/app/components/Location";
import Footer       from "@/app/components/Footer";
import CartPanel    from "@/app/components/CartPanel";
import ChatWidget   from "@/app/components/ChatWidget";
import FloatActions from "@/app/components/FloatActions";
import { GooeyMarquee } from "@/app/components/GooeyMarquee";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  const open  = () => setChatOpen(true);
  const close = () => setChatOpen(false);

  return (
    <>
      <Navbar onChatOpen={open} />
      <Intro />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero     onChatOpen={open} />
        <GooeyMarquee text="TORRENZ GAMING · PS5 LOUNGE · PERAMBUR · CHENNAI · " speed={18} />
        <Rooms />
        <AddOns />
        <Gallery />
        <Pricing />
        <Booking />
        <Location />
      </main>
      <Footer />
      <CartPanel />
      <ChatWidget isOpen={chatOpen} onClose={close} />
      <FloatActions onChatOpen={open} />
    </>
  );
}
