import React from "react";
import { UncontrolledCarousel } from "reactstrap";
//import cat3 from "../assets/cat1.png";

const items = [
  // {
  //   src: "https://cdn2.thecatapi.com/images/hYG6uIRWL.jpg?",
  //   //src: "https://cdn2.thecatapi.com/images/hYG6uIRWL.jpg",
  //   // src: "https://loremflickr.com/320/240/cat?random=1",
  //   //src: "https://cdn2.thecatapi.com/images/dn4GBRons.jpg",
  //   // altText: "Slide 1",
  //   // caption: "Slide 1",
  //   header: "Himalayan",
  //   //header: "Birman",
  //   key: "1",
  // },
  {
    // src: "https://loremflickr.com/320/240/cat?random=2",
    src: "https://cdn2.thecatapi.com/images/imz2EwFWv.jpg",
    //altText: "Slide 2",
    caption: "",
    header: "Ocicat",
    key: "2",
  },
  {
    src: "https://cdn2.thecatapi.com/images/b4paC3RGM.jpg",
    // altText: "Slide 3",
    caption: "",
    header: "Pixie-bob",
    key: "3",
  },
  {
    src: "https://cdn2.thecatapi.com/images/J4Jv10E7O.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "Burmilla",
    key: "4",
  },
  {
    src: "https://cdn2.thecatapi.com/images/E4j4aBDx9.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "Chantilly-Tiffany",
    key: "5",
  },
  {
    src: "https://cdn2.thecatapi.com/images/mjeF1hs8v.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "Dragon Li",
    key: "6",
  },
  {
    src: "https://cdn2.thecatapi.com/images/3-DZDkDGa.jpg",
    // altText: "Slide 3",
    caption: "",
    header: "Chartreux",
    key: "7",
  },
  {
    src: "https://cdn2.thecatapi.com/images/ZZmFRKWZZ.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "American Curl",
    key: "8",
  },
  {
    src: "https://cdn2.thecatapi.com/images/O0mRNLlqd.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "Malayan",
    key: "9",
  },
  {
    src: "https://cdn2.thecatapi.com/images/f6TE5pt6f.jpg",
    //altText: "Slide 3",
    caption: "",
    header: "Oriental",
    key: "10",
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;
