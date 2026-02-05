export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  sizes?: string[];
  image?: string;
  url: string;
};

export const products: Product[] = [
    {
    id: 'fine-jersey-tee',
    name: 'T Shirt Talk Tee',
    price: 25,
    description: 'Soft and comfortable fine jersey t-shirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/TSHTTKBRN.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/mens-t-shirt-talk-t',
  },
  {
    id: 'talk-sweatshirt',
    name: 'T-Shirt Talk Sweatshirt',
    price: 40,
    description: 'Classic T-Shirt Talk sweatshirt design',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/TSTSWTSHRTGRY.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/t-shirt-talk-sweatshirt',
  },
  {
    id: 'talk-hoodie',
    name: 'T-Shirt Talk Hoodie',
    price: 40,
    description: 'Comfortable T-Shirt Talk hoodie',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/TSTHOODRED.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/t-shirt-talk-hoodie-696aade676dd7',
  },
  {
    id: 'adidas-polo',
    name: 'Stallion Ranch Media Polo',
    price: 60,
    description: 'Premium adidas polo shirt with space-dyed design',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/SRMPOLOBLK.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/adidas-space-dyed-polo',
  },
  {
    id: 'quarter-zip',
    name: 'Stallion Ranch Media Light Quarter Zip Pullover',
    price: 28,
    description: 'Comfortable lightweight quarter zip pullover',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/SRMPOVERBLK.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/lightweight-quarter-zip-pullover',
  },
  {
    id: 'premium-sweatshirt',
    name: 'Stallion Ranch Media Sweatshirt',
    price: 30,
    description: 'High-quality unisex premium sweatshirt',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    image: new URL('../app/components/assets/SRMSWTSHRTBLK.png', import.meta.url).href,
    url: 'https://stallionranchmedia.printful.me/product/unisex-premium-sweatshirt',
  },
];
