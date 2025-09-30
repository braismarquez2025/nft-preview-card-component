import "./assets/sass/style.scss"
import { NFTComponent } from "./NFTComponent";
import nft from "./assets/images/image-equilibrium.jpg";
import iconNft from "./assets/images/icon-ethereum.svg";
import user from "./assets/images/image-avatar.png";

function App() {

  return (
    <>
      <NFTComponent
        imageNFT={nft}
        name={"Equilibrium #3429"}
        description={"Our Equilibrium collection promotes balance and calm."}
        iconNFT={iconNft}
        valor={"0.041 ETH"}
        time={3}
        imgUser={user}
        autor={"Jules Wyvern"}
      />
    </>
  )
}

export default App
