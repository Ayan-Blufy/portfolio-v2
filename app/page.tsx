"use client";
import { useEffect, useRef } from "react";
import Portfolio from "../components/portfolio";

export default function Page() {
  const auraRef = useRef<HTMLDivElement>(null);

 
   useEffect(() => {
    const updateAuraPosition = (e: MouseEvent) => {
      if (auraRef.current) {
        auraRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("pointermove", updateAuraPosition);

    return () => {
      window.removeEventListener("pointermove", updateAuraPosition);
    };
  }, []);

  return (
    <>
      <div ref={auraRef} className="mouse-aura" /> <Portfolio />
    </>
  );
}
