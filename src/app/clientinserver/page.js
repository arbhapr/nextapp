const fetchQuotes = async () => {
    let quotes = await fetch('https://dummyjson.com/quotes');
    quotes = await quotes.json();
    return quotes.quotes;
}
const ClientInServer = async () => {
    let quotes = await fetchQuotes();
    console.log(quotes);
    return (
        <div className="container">
            <h2 className="text-center mt-2">Quotes</h2>
            {
                quotes.map((p) => {
                    return <div key={p.id}>
                        <p>Quote: {p.quote}</p>
                        <p>
                            <button className="btn btn-primary" onClick={()=>alert("test")}>Show Author</button>
                        </p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}

export default ClientInServer