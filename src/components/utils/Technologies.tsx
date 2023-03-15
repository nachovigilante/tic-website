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

const Technology = ({ logo }: { logo: React.ReactElement }) => {
    return (
        <div className="h-36 w-36 flex justify-center items-center">
            {logo}
        </div>
    );
};

const Technologies = () => {
    return (
        <div className="flex flex-wrap gap-6 justify-center mt-12 max-w-[1000px]">
            <Technology logo={<JuegosSVG className="glow-sm-cyan" />} />
            <Technology logo={<VRSVG className="glow-sm-turquoise" />} />
            <Technology logo={<IoTSVG className="glow-sm-pink" />} />
            <Technology logo={<IASVG className="glow-sm-lime" />} />
            <Technology logo={<EmpatizandoSVG className="glow-sm-purpule" />} />
            <Technology
                logo={<BlockchainSVG className="glow-sm-dark-purpule" />}
            />
            <Technology logo={<MobileSVG className="glow-sm-yellow" />} />
            <Technology logo={<ArteSVG className="glow-sm-pearl" />} />
            <Technology logo={<SatSVG className="glow-sm-orange" />} />
            <Technology logo={<Imp3DSVG className="glow-sm-teal" />} />
            <Technology logo={<HardwareSVG className="glow-sm-red" />} />
        </div>
    );
};

export default Technologies;
