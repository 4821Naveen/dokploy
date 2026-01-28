import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const initGSAP = () => {
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }
};

export { gsap, ScrollTrigger };
