import { Space_Grotesk } from "next/font/google";

const font_Grotesk = Space_Grotesk({
    subsets: ['latin-ext'],
    display: 'swap',
    strategy: 'selfHosted',
    weights: [400, 500, 600, 700],
    styles: ['normal', 'italic'],
    preload: true, 
})

export default font_Grotesk;