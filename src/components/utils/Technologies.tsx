import JuegosSVG from "../../../public/images/games.svg";
import VRSVG from "../../../public/images/vr.svg";
import IoTSVG from "../../../public/images/iot.svg";
import IASVG from "../../../public/images/ia.svg";
import EmpatizandoSVG from "../../../public/images/empatizando.svg";
import BlockchainSVG from "../../../public/images/blockchain.svg";
import MobileSVG from "../../../public/images/mobile.svg";
import ArteSVG from "../../../public/images/arte.svg";
import SatSVG from "../../../public/images/sat.svg";
import Imp3DSVG from "../../../public/images/3d.svg";
import HardwareSVG from "../../../public/images/hardware.svg";

export const Technology = ({ logo }: { logo: React.ReactElement }) => {
    return (
        <div className="h-36 w-36 flex justify-center items-center">{logo}</div>
    );
};

const Technologies = ({ color }: { color?: boolean }) => {
    return (
        <div className="flex flex-wrap gap-6 justify-center mt-12 max-w-[1000px]">
            <Technology logo={<JuegosSVG className={color ? "glow-sm-cyan" : "glow-sm-white"} />} />
            <Technology logo={<VRSVG className={color ? "glow-sm-turquoise" : "glow-sm-white"} />} />
            <Technology logo={<IoTSVG className={color ? "glow-sm-pink" : "glow-sm-white"} />} />
            <Technology logo={<IASVG className={color ? "glow-sm-lime" : "glow-sm-white"} />} />
            <Technology logo={<EmpatizandoSVG className={color ? "glow-sm-purpule" : "glow-sm-white"} />} />
            <Technology
                logo={<BlockchainSVG className={color ? "glow-sm-dark-purpule" : "glow-sm-white"} />}
            />
            <Technology logo={<MobileSVG className={color ? "glow-sm-yellow" : "glow-sm-white"} />} />
            <Technology logo={<ArteSVG className={color ? "glow-sm-pearl" : "glow-sm-white"} />} />
            <Technology logo={<SatSVG className={color ? "glow-sm-orange" : "glow-sm-white"} />} />
            <Technology logo={<Imp3DSVG className={color ? "glow-sm-teal" : "glow-sm-white"} />} />
            <Technology logo={<HardwareSVG className={color ? "glow-sm-red" : "glow-sm-white"} />} />
        </div>
    );
};

export default Technologies;
