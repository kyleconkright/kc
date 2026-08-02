import { gsap } from 'gsap';

import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText, MorphSVGPlugin);

export { gsap, MorphSVGPlugin, ScrollTrigger, SplitText };
