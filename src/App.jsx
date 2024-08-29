import { useState } from 'react'
import logo from "./assets/img/logo.png"
import { Preview } from './components/Preview'
import { PartList } from './handle/PartList';
import { Selection } from './components/Selection';

const total = {
  body: 17,
  eyes: 17,
  eyebrows: 15,
  mouth: 24,
  hair: 73,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
  earrings: 32,
  glasses: 17,
  hats: 28,
  neckwear: 18,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [eyesBrow, setEyesBrow] = useState(0);
  const [mouth, setMouth] = useState(0);
  const [hair, setHair] = useState(0);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [earrings, setEarrings] = useState(0);
  const [glasses, setGlasses] = useState(0);
  const [hats, setHats] = useState(0);
  const [neckwear, setNeckwear] = useState(0);
  return (
    <>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="separator"></div>
      <div className="mainCont">
        <div className="preview">
          <Preview body={body} eyes={eyes} eyebrow={eyesBrow} mouth={mouth} hair={hair}
            clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} earrings={earrings}
            glasses={glasses} hats={hats} neckwear={neckwear} />
        </div>
        <div className="selection">
          <Selection content={"Skin Color"} total={total.body} path={"body"} set={setBody} selected={body} />
          <Selection content={"Eyes"} total={total.eyes} path={"eyes"} set={setEyes} selected={eyes} />
          <Selection content={"Eyes Brow"} total={total.eyebrows} path={"eyebrows"} set={setEyesBrow} selected={eyesBrow} />
          <Selection content={"Mouth"} total={total.mouth} path={"mouths"} set={setMouth} selected={mouth} />
          <Selection content={"Hair Styles"} total={total.hair} path={"hair"} set={setHair} selected={hair} />
          <Selection content={"Clothing 1"} total={total.clothing1} path={"clothes/layer_1"} set={setClothing1} selected={clothing1} />
          <Selection content={"Clothing 2"} total={total.clothing2} path={"clothes/layer_2"} set={setClothing2} selected={clothing2} />
          <Selection content={"Clothing 3"} total={total.clothing3} path={"clothes/layer_3"} set={setClothing3} selected={clothing3} />
          <Selection content={"Earrings"} total={total.earrings} path={"accessories/earrings"} set={setEarrings} selected={earrings} />
          <Selection content={"Glasses"} total={total.glasses} path={"accessories/glasses"} set={setGlasses} selected={glasses} />
          <Selection content={"Hats"} total={total.hats} path={"accessories/hats"} set={setHats} selected={hats} />
          <Selection content={"Neckwear"} total={total.neckwear} path={"accessories/neckwear"} set={setNeckwear} selected={neckwear} />
        </div>
      </div>
    </>
  )
}

export default App
