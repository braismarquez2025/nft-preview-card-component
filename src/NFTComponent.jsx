import clock from "./assets/images/icon-clock.svg";
import eye from "./assets/images/icon-view.svg";
import { useState } from "react";

export const NFTComponent = ({imageNFT, name, description, iconNFT, valor, time, imgUser, autor}) => {

    const [ hovered, setHovered ] = useState(false);
    
    return (
        <section className="container">

            <div className="container-relative">
                <img src={imageNFT} alt="imagen-nft" className="container_img-principal"
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
                />
                {hovered && 
                    <div className="capaCyan">
                        <img src={eye} alt="eye-hover" className="eye-hover"></img>
                    </div>
                }
            </div>
            
            <div className="container_content">
                <h2 className={`container_content-${hovered ? 'cambioColor': 'name'} text-preset-1`}>{name}</h2>
                <p className="container_content-text text-preset-2">{description}</p>

                <article className="container_info">
                    <div className="container_info-article">
                        <img src={iconNFT} alt="logo-etf"></img>
                        <p className="container_info-article-number text-preset-3-semibold">{valor}</p>
                    </div>

                    <div className="container_info-article">
                        <img src={clock} alt="time"></img>
                        <p className="container_info-article-time text-preset-3-regular">{time} days left</p>
                    </div>
                </article>
            </div>

            <hr />

            <footer className="container_user">
                <img src={imgUser} alt="img-user" className="container_user-img"></img>
                <p className="container_user-text text-preset-3-regular">Creation of<span className={`container_user-text-${hovered ? 'cambioColor': 'span'}`}>{autor}</span></p>
            </footer>
        </section>
    )
}