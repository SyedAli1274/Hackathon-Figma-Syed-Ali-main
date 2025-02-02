import { client } from "../../sanity/lib/client";
import imageUrlBuilder from '@sanity/image-url';

// Create a builder function for image URLs
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

// Fetch function to get featured products with imageUrl
export const TopCategory = async () => {
  const query = `*[_type == "categories" && slug.current in ["wing-chair","wooden-chair","desk-chair"]]{
    title,
    price,
    stock,
    slug,
    image
  }`;

  try {
    const products = await client.fetch(query); // Fetch the data using GROQ query
    // Process the image URLs
    const productsWithImageUrl = products.map((product: any) => ({
      ...product,
      imageUrl: urlFor(product.image).url()
    }));
    return productsWithImageUrl; // Return the fetched products with image URLs
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // Return an empty array in case of an error
  }
};
  