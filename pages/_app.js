import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// import Chatbot from "@/app/components/Chatbot";
// import CustomCursor from "@/app/components/CustomCursor";
// import LiveChat from "@/app/components/LiveChat";
// import Script from "next/script";

// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`}
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'YOUR_GA_ID');
//           `,
//         }}
//       />
//       <Component {...pageProps} />
//       <Chatbot />
//       <CustomCursor />
//       <LiveChat />
//     </>
//   );
// }

// export default MyApp;
