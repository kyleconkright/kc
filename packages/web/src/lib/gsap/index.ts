import { gsap } from 'gsap';

import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText, MorphSVGPlugin);

export { gsap, MorphSVGPlugin, SplitText };
