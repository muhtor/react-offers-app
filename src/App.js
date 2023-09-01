import React, {useState, useEffect} from "react";
import axios from "axios";
import './App.css';  // Импортируем CSS-файл

function App() {
    const [offers, setOffers] = useState([]);

    useEffect(() => {
        // Выполните запрос к API при загрузке компонента
        axios.get("https://www.kattabozor.uz/hh/test/api/v1/offers")
            .then((response) => {
                setOffers(response.data['offers']);
            })
            .catch((error) => {
                console.error("Ошибка при получении данных:", error);
            });
    }, []);

    return (
        <div className="App">
            <h1>Electronics\Mobile phones</h1>
            <div className="card-container">
                {offers.map((offer) => (
                    <div className="card" key={offer.id}>
                        <h2>{offer.name}</h2>
                        <img src={offer.image.url} alt={offer.name}/>
                        <div className="card-text">
                            <p>Brand: {offer.brand}</p>
                            <p>Category: {offer.category}</p>
                            <p>Merchant: {offer.merchant}</p>
                            <p>RAM: {offer.attributes.find((attr) => attr.name === "RAM")?.value}</p>
                            <p>ROM: {offer.attributes.find((attr) => attr.name === "ROM")?.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default App;
