import {Inter , Lusitana} from 'next/font/google'
// import localFont from "next/font/local";
export const inter = Inter ({subsets : ['latin']})
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// export const Inter = localFont({
//     src: "../../public/fonts/Inter_28pt-Regular.ttf",
//     variable: "--font-Inter",
//     weight: "100 900",
//   });
// export const Lusitana = localFont({
//     src: "../../public/fonts/Lusitana-Regular.ttf",
//     variable: "--font-Lusitana",
//     weight: "100 900",
//   });


  // import '../../public/fonts/Inter_28pt-Regular.ttf'
// import '../../public/fonts/Lusitana-Regular.ttf'