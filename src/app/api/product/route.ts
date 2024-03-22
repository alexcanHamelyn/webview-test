import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const customHeader = request.headers.get("H-shop-token");
    const token = customHeader;

    if (!token) {
        return NextResponse.json({ message: "No token found" }, { status: 500 });
    }

    const decoded = jwtDecode(token);

    return NextResponse.json({
        decoded,
        product: {
            "_id": "9788499087122",
            "productType": "book",
            "categories": [
                "Literatura y ficción",
                "Literatura mundial"
            ],
            "title": "El Monje Que Vendió Su Ferrari: Una Fábula Espiritual",
            "description": "El monje que vendió su Ferrari es una fábula espiritual que, desde hace más de quince años, ha marcado la vida de millones de personas en todo el mundo.A través de sus páginas, conocemos la extraordinaria historia de Julian Mantle, un abogado de éxito que, tras sufrir un ataque al corazón, debe afrontar el gran vacío de su existencia. Inmerso en esta crisis existencial, Julian toma la radical decisión de vender todas sus pertenencias y viajar a la India. Es en un monasterio del Himalaya donde aprende las sabias y profundas lecciones de los monjes sobre la felicidad, el coraje, el equilibrio y la paz interior.Con esta historia tan especial e inolvidable, Robin Sharma nos enseña, paso a paso, una nueva manera de enfocar la vida personal, profesional y familiar. Nos muestra lo importante que es emprender un recorrido vital con una dirección clara, con pasión y armonía interior.*** Más de 5 millones de libros vendidos.Reseña:«Los libros de Robin Sharma ayudan a personas de todo el mundo a vivir una vida extraordinaria.»Paulo Coelho, autor de El alquimista ",
            "image": "https://ul2efuvs5p2hmdcb.public.blob.vercel-storage.com/9788499087122.jpg",
            "lastUpdated": "2023-10-24T10:40:28.356Z",
            "asin": "8499087124",
            "priceBuy": 0.7,
            "priceSell": 7.058000000000002,
            "lastPriceUpdate": "2024-03-16T09:38:05.664Z",
            "needUpdate": false,
            "attributes": {
                "authors": [
                    "Robin Sharma"
                ],
                "publisher": "Debolsillo; 001 edición (29 octubre 2010)",
                "language": "ES",
                "pages": 224,
                "format": "Libro de bolsillo",
                "weight": 154,
                "releaseYear": 2010
            }
        }
    }, { status: 200 });
}