import ItemProduit from "./ItemProduit";

export default function ListeProduits() {

    const produits = [{
        id: 1,
        item: 'Vegetable',
        name: 'Calabrese Broccoli',
        imgSrc: "./assets/home/products/brocoli.png",
        prix: "13.00",
    },
    {
        id: 2,
        item: '',
        imgSrc: "",
        prix: 12.99,
    },
    {
        id: 3,
        item: '',
        imgSrc: "",
        prix: 12.99,
    },
    {
        id: 4,
        item: '',
        imgSrc: "",
        prix: 12.99,
    },
    {
        id: 5,
        item: '',
        imgSrc: "",
        prix: 12.99,
    }
    ];

    return (
    <div className='grid grid-cols-4 gap-7'>
        {produits.map((produit) => (
            <ItemProduit oneProduit={produit} key={produit.id}/>
        ))}
    </div>
    );
}