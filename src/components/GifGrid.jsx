
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)


    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) // si es true muestra el h2 si no, continua
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image} //Mnada todas las propiedades
                        />
                    ))
                }
            </div>
        </>
    )
}
