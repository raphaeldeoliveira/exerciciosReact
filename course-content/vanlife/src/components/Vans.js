import React from "react"
import VanThumb from "./VanThumb"

// importe das imagens
import vanOne from "../assets/van-images/van1.jpg"
import vanTwo from "../assets/van-images/van2.jpg"
import vanThree from "../assets/van-images/van3.jpg"
import vanFour from "../assets/van-images/van4.jpg"
import vanFive from "../assets/van-images/van5.jpg"
import vanSix from "../assets/van-images/van6.jpg"

export default function Vans() {

    const [vansData, setVansData] = React.useState(null)

    /*
        Como os dados vão vir:
        * id: 1,
        * name: "Modest Explorer",
        * price: 60,
        * description: lorem ipsum color durem..., 
        * imageUrl: "",
        * type: "simple"
    */

    React.useEffect(() => {
        fetch("http://localhost:8080/")
        .then((response) => response.json())
        .then((data) => {
            setVansData(data);
        })
    }, [])

    const vansElements = vansData.map(van => (
        <VanThumb 
            vanId={van.vanId}
            vanImage={van.vanImage}
            vanTitle={van.vanTitle}
            vanPrice={van.vanPrice}
            tagColor={van.vanColor}
            vanTag={van.vanTag}
            vanDiscount={van.vanDiscount}
        />
    ))

    // FOI SUBSTITUIDA PELA DE CIMA
    /*function loadVans() {
        // verifica se o numero de vans é impar. Se for o ultimo 
        // nao aparecerá na lista
        if (vansData.length % 2 == 1) {
            // deleta o ultimo elemento do array de vans (na lista deve ser par)
        }
        return () => {
            for (let i=0; i<vansData.length; i++) {
                <VanThumb 
                    vanImage={vansData[i].vanImage}
                    vanTitle={vansData[i].vanTitle}
                    vanPrice={vansData[i].vanPrice}
                    tagColor={vansData[i].vanColor}
                    vanTag={vansData[i].vanTag}
                    vanDiscount={vansData[i].vanDiscount}
                />
            }
        }
    }*/
    
    return (
        <div className="vans-page">
            <div >
                <h2>Explore our vans options</h2>
                <nav>
                    <button>Explore</button>
                    <button>Lauring</button>
                    <button>Reggae</button>
                    <button className="clean-button">Clean filters</button>
                </nav>
                <div className="vans-list">
                    {vansElements}
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