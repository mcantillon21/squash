import { InitializationError } from "level-errors";
import React from "react";
import Marquee from "react-easy-marquee";

export default function Counter() {
    const movies = [
      "https://m.media-amazon.com/images/I/51fHBxGsqhL.jpg",
      "https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg",
      "https://i.imgur.com/MPhdtai.png",
      "https://i.imgur.com/9dprIE8.png",
      "https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889",
      "https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png",
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg",
    ];
  
    return (
      <div class="marquee">
        <ul class="marquee__content">
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg" width="250" alt="Astro"/>
          <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://i.imgur.com/MPhdtai.png" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://i.imgur.com/9dprIE8.png" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png" width="250" alt="Astro"/>
        </ul>
        <ul class="marquee__content" aria-hidden="true">
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://i.imgur.com/MPhdtai.png" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://i.imgur.com/9dprIE8.png" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg" width="250" alt="Astro"/>
        <img style={{
                          height: '200px',
                          width: '300px',
                          borderRadius: '20px',
                          objectFit: 'cover',
                          display: 'initial'
                        }}
          src="https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png" width="250" alt="Astro"/>
        </ul>
      </div>





    // <div className="test">
    //   <marquee direction="left" bgColor="white" width="100%">
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '170px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://i.imgur.com/MPhdtai.png" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://i.imgur.com/9dprIE8.png" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg" width="250" alt="Astro"/>
        // <img style={{
        //                   height: '200px',
        //                   width: '300px',
        //                   borderRadius: '20px',
        //                   objectFit: 'cover',
        //                   display: 'initial'
        //                 }}
        //   src="https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png" width="250" alt="Astro"/>
    //   </marquee>
    //   </div>




      
    );
  };
  


  // return <div>Hello, world!</div>;



// import Marquee from "react-easy-marquee";
// // import React from "react";

// // function Example() {
// //   // const images = ["https://picsum.photos/200", "https://picsum.photos/100"];
//   // const movies = [
//   //   "https://m.media-amazon.com/images/I/51fHBxGsqhL.jpg",
//   //   "https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg",
//   //   "https://i.imgur.com/MPhdtai.png",
//   //   "https://i.imgur.com/9dprIE8.png",
//   //   "https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889",
//   //   "https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png",
//   //   "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg",
//   // ];

// //   return (
//     // <div className="test">
//     //   <Marquee
//     //     duration={6000}
//     //     background="#FFFFFF"
//     //     height="220px"
//     //     width="100%"
//     //     axis="X"
//     //     align="center"
//     //     pauseOnHover={true}
//     //     reverse={false}
//     //   >
//     //     {movies.map((image) => (
//     //         <div className="card" key="unique">
//     //           <img src={image}
              // style={{
              //   height: '200px',
              //   width: '300px',
              //   borderRadius: '20px',
              //   objectFit: 'cover'
              // }}
//     //           />          
//     //         </div>
//     //       ))}
//     //   </Marquee>
//     // </div>
// //   );
// // };

// // export {Example}
// // //   <aside>
// // //   <div>
// // //   <header>yo</header>
// // //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>

// // //   <Marquee speed={100} style="display: flex !important">
// // //     <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
// // //     <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>

// // //     <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
// // //   </Marquee>
// // //   <Marquee>
// // //     I can be a React component, multiple React components, or just some text.
// // //   </Marquee>
// // //   </div>
// // // </aside>

// import React from "react";
// export const Scroll = () => {
//   // const { event } = useEvent(Id);
//   // console.log('Id', Id);

//   const movies = [
//     "https://m.media-amazon.com/images/I/51fHBxGsqhL.jpg",
//     "https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg",
//     "https://i.imgur.com/MPhdtai.png",
//     "https://i.imgur.com/9dprIE8.png",
//     "https://jenis.cardfoundry.com/merch/jenis/images/giftcard_images/card_jenisCRD.png?t=1608648889",
//     "https://d.comenity.net/ac/jcrew/images/Client/CardArt/CreditCardLarge.png",
//     "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6389/6389631_sd.jpg",
//   ];

//   return (
//     <div className="test">
//       <Marquee
//         duration={6000}
//         background="#FFFFFF"
//         height="220px"
//         width="100%"
//         axis="X"
//         align="center"
//         pauseOnHover={true}
//         reverse={false}
//       >
//         {movies.map((image) => (
//             <div className="card" key="unique">
//               <img src={image}
//               style={{
//                 height: '200px',
//                 width: '300px',
//                 borderRadius: '20px',
//                 objectFit: 'cover'
//               }}
//               />          
//             </div>
//           ))}
//       </Marquee>
//     </div>
//   );
// };

// // export default FooterScroll;

    //   <div>
    //     {movies.map((image) => (
    //       <div class="bg-marquee bg-[url(`${image}`)]"/>
    //     ))}
    // </div>


      // <div class="marquee">
      //   <p>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>
      //   <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6421/6421949_sd.jpg" width="250" alt="Astro"/>

      //   </p>
      //   </div>

      // <div className="test">
            //   <div class="marquee">
            //     <p>
            //     {movies.map((image) => (
            //         <div className="card" key="unique">
            //           <img src={image}
            //           style={{
            //             height: '200px',
            //             width: '300px',
            //             borderRadius: '20px',
            //             objectFit: 'cover'
            //           }}
            //           />          
            //         </div>
            //       ))}

            //     </p>
            // </div>
            // </div>