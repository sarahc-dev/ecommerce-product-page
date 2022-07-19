import Image1 from "./images/image-product-1.jpg";
import Thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import Image2 from "./images/image-product-2.jpg";
import Thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import Image3 from "./images/image-product-3.jpg";
import Thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import Image4 from "./images/image-product-4.jpg";
import Thumbnail4 from "./images/image-product-4-thumbnail.jpg";

const products = [
  {
    category: "mens",
    company: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    discount: 50,
    images: [
      {
        id: 0,
        image: Image1,
        thumbnail: Thumbnail1,
        alt: "Image of the product",
      },
      {
        id: 1,
        image: Image2,
        thumbnail: Thumbnail2,
        alt: "Image of the product",
      },
      {
        id: 2,
        image: Image3,
        thumbnail: Thumbnail3,
        alt: "Image of the product",
      },
      {
        id: 3,
        image: Image4,
        thumbnail: Thumbnail4,
        alt: "Image of the product",
      },
    ],
  },
];

export default products;
