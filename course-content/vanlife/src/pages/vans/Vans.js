import React from "react"
import VanThumb from "./VanThumb"

// importe das imagens
import vanOne from "../../assets/van-images/van1.jpg"
import vanTwo from "../../assets/van-images/van2.jpg"
import vanThree from "../../assets/van-images/van3.jpg"
import vanFour from "../../assets/van-images/van4.jpg"
import vanFive from "../../assets/van-images/van5.jpg"
import vanSix from "../../assets/van-images/van6.jpg"

export default function Vans() {

    const [vansData, setVansData] = React.useState(null)
    const [activeFilter, setActiveFilter] = React.useState(null)

    /*
        Como os dados vão vir:
        * id: 1,
        * name: "Modest Explorer",
        * price: 60,
        * description: lorem ipsum color durem..., 
        * imageUrl: "",
        * type: "simple"
    */

    function getGeral() {
        fetch("http://localhost:8080/vans")
        .then((response) => response.json())
        .then((data) => {
            setVansData(data);
        })
        loadVans()
        setActiveFilter(null)
    }

    function getFiltro(filtro) {
        fetch(`http://localhost:8080/vans/filter?filter=${filtro}`)
        .then((response) => response.json())
        .then((data) => {
            setVansData(data);
        })
        loadVans()
        switch (filtro) {
            case "Explore": setActiveFilter(0);
            break;
            case "Lauring": setActiveFilter(1);
            break;
            case "Reggae": setActiveFilter(2);
            break;
        }
    }

    React.useEffect(() => {
        fetch("http://localhost:8080/vans")
        .then((response) => response.json())
        .then((data) => {
            setVansData(data);
        })
    }, [])

    function loadVans() {
        if (vansData && vansData.length % 2 === 1) {
            vansData.pop(); // Remove o último elemento do array de vans se for ímpar
        }

        function setTagColor(van) {
            switch (van.vanCategory) {
                case "Explore": return "black";
                case "Lauring": return "#2E933C";
                case "Reggae": return "#963484";
            }
        }

        return vansData ? vansData.map((van, index) => (
            <VanThumb 
                key={index}
                vanId={van.id}
                vanImage={van.urlImage}
                vanTitle={van.vanName}
                vanPrice={van.vanPrice}
                tagColor={setTagColor(van)}
                vanTag={van.vanCategory}
                vanDiscount={van.typeLocation}
            />
        )) : null;
    }
    
    return (
        <div className="vans-page">
            <div >
                <h2>Explore our vans options</h2>
                <nav>
                    <button 
                        style={{ 
                            backgroundColor: activeFilter === 0 ? "black" : "",
                            color: activeFilter === 0 ? "white" : ""
                        }}
                        onClick={() => getFiltro("Explore")}
                        >Explore
                    </button>
                    <button 
                        style={{ 
                            backgroundColor: activeFilter === 1 ? "#2E933C" : "",
                            color: activeFilter === 1 ? "white" : ""
                        }}
                        onClick={() => getFiltro("Lauring")}
                        >Lauring
                    </button>
                    <button 
                        style={{ 
                            backgroundColor: activeFilter === 2 ? "#963484" : "",
                            color: activeFilter === 2 ? "white" : ""
                        }}
                        onClick={() => getFiltro("Reggae")}
                        >Reggae
                    </button>
                    <button 
                        onClick={() => getGeral()} 
                        className="clean-button"
                        >Clean filters
                    </button>
                </nav>
                <div className="vans-list">
                    {loadVans()}
                    {/*<VanThumb 
                        vanImage={vanOne}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanTag="Explore"
                        vanDiscount="$20"
                    />
                    <VanThumb 
                        vanImage={vanTwo}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanThree}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#000000"
                        vanTag="Lauring"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanFour}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#ff4500"
                        vanTag="Explore"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanFive}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#000000"
                        vanTag="Lauring"
                        vanDiscount="$20"/>
                    <VanThumb 
                        vanImage={vanSix}
                        vanTitle="Murder Explorer"
                        vanPrice="$90"
                        tagColor="#0b4e3e"
                        vanTag="Reggae"
                        vanDiscount="$20"/>*/}
                </div>
            </div>
        </div>
        
    )
}