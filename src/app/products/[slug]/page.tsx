import FeatureCard from "@/components/(Landing All Pages)/cardproduct";
import { fetchProductBySlug } from "@/components/dynamic";
// import { TopCategory } from "@/components/fetch2";
import ProductDetails from "@/components/ProductDetailed";

// Define the Product interface
interface Products {
  slug: string;
  title: string;
  price: number;
  imageUrl: string;
  stock: number;
  description: string;
  category: {
    title: string;
    description: string;
    imageUrl: string;
  };
}

// Define the Page Props interface
interface ProductPageProps {
 params: Promise<{ slug: string }>;  // Adjust to Promise type as required
}

// ProductPage is an asynchronous function that will fetch data based on the slug
export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  console.log("Fetched slug:", slug); // Debugging step
  const product: Products  = await fetchProductBySlug(slug);
  console.log(product)

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
      <FeatureCard />
    </div>
  );
}
