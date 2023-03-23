export default function ItemProduit({oneProduit}) {

    return(
        <article className="h-15 flex flex-col justify-start py-7 rounded-xl"
            style={{ backgroundColor: "var(--color-grayLight)"}}>
            <header>
                <h6 className="px-5 py-2">{oneProduit.item}</h6>
            </header>
            <main>
                <img src={oneProduit.imgSrc} alt="ProductImg" width="100%" className="py-5"/>
            </main>
            <footer>
                <h6 className="mx-5 py-2 border-b-2">{oneProduit.name}</h6>
                <div>
                    <h6 className="px-5 pt-2">{oneProduit.prix}</h6>
                    <div>

                    </div>
                </div>
            </footer>
        </article>
    )
}