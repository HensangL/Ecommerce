import product1 from '../assets/images/product.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.jpg'
import product4 from '../assets/images/Aesthetic Conceito Foto Food Photo Styling Photography Foodstyle Foto Criativa Produto Beauty Cosméticos Cosmetics Oil Óleo Reparador.jpeg'
import product5 from '../assets/images/Deodorant Projects __ Photos, videos, logos, illustrations and branding.jpeg'
import product6 from '../assets/images/download (2).jpeg'
import product7 from '../assets/images/Product Poster Design  Sprite.jpeg'

export const Products = [
    {
        id: 1,
        name: "Water Bottle",
        image: product1,
        price: 200,
        description: "A durable water bottle for all your hydration needs.",
        slug: "water-bottle",
        category: "drinks",
        brand: "Generic",
        onSale: false
    },
    {
        id: 2,
        name: "Perfume",
        image: product2,
        price: 500,
        description: "A Luxurious fragrance to keep you fresh all day.",
        slug: "perfume",
        category: "fragrance",
        brand: "Chanel",
        onSale: true
    },
    {
        id: 3,
        name: "Deodorant",
        image: product3,
        price: 100,
        description: "A refreshing deodorant to keep you smelling great.",
        slug: "deodorant",
        category: "personal-care",
        brand: "Nivea",
        onSale: false
    },
    {
        id: 4,
        name: "Cosmetic Oil",
        image: product4,
        price: 300,
        description: "A nourishing cosmetic oil.",
        slug: "cosmetic-oil",
        category: "cosmetics",
        brand: "Fenty",
        onSale: false
    },
    {
        id: 5,
        name: "Deodorant Spray",
        image: product5,
        price: 150,
        description: "A long-lasting deodorant spray.",
        slug: "deodorant-spray",
        category: "personal-care",
        brand: "Dove",
        onSale: true
    },
    {
        id: 6,
        name: "Product 6",
        image: product6,
        price: 250,
        description: "A new product.",
        slug: "product-6",
        category: "others",
        brand: "Generic",
        onSale: false
    },
    {
        id: 7,
        name: "Sprite",
        image: product7,
        price: 50,
        description: "A refreshing drink.",
        slug: "sprite",
        category: "drinks",
        brand: "Coca-Cola",
        onSale: false
    }
];
