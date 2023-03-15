// import JuegosSVG from "../../../public/images/games.svg";
// import VRSVG from "../../../public/images/vr.svg";
// import IoTSVG from "../../../public/images/iot.svg";
// import IASVG from "../../../public/images/ia.svg";
// import EmpatizandoSVG from "../../../public/images/empatizando.svg";
// import BlockchainSVG from "../../../public/images/blockchain.svg";
// import MobileSVG from "../../../public/images/mobile.svg";
// import ArteSVG from "../../../public/images/arte.svg";
// import SatSVG from "../../../public/images/sat.svg";
// import Imp3DSVG from "../../../public/images/3d.svg";
// import HardwareSVG from "../../../public/images/hardware.svg";
import { twMerge } from "tailwind-merge";

export type Technology = {
    code: string;
    name: string;
    /*logo: any;*/ logoURL: string;
    color: string;
};

export const technologies = [
    {
        code: "games",
        name: "Juegos",
        // logo: JuegosSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/games.svg",
        color: "glow-sm-cyan",
    },
    {
        code: "vr",
        name: "Realidad Virtual",
        // logo: VRSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/vr.svg",
        color: "glow-sm-turquoise",
    },
    {
        code: "iot",
        name: "Internet de las Cosas",
        // logo: IoTSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/iot.svg",
        color: "glow-sm-pink",
    },
    {
        code: "ia",
        name: "Inteligencia Artificial",
        // logo: IASVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/ia.svg",
        color: "glow-sm-lime",
    },
    {
        code: "empatizando",
        name: "Empatizando",
        // logo: EmpatizandoSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/empatizando.svg",
        color: "glow-sm-purpule",
    },
    {
        code: "blockchain",
        name: "Blockchain",
        // logo: BlockchainSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/blockchain.svg",
        color: "glow-sm-dark-purpule",
    },
    {
        code: "mobile",
        name: "Mobile",
        // logo: MobileSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/mobile.svg",
        color: "glow-sm-yellow",
    },
    {
        code: "art",
        name: "Arte",
        // logo: ArteSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/arte.svg",
        color: "glow-sm-pearl",
    },
    {
        code: "sat",
        name: "Satélites",
        // logo: SatSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/sat.svg",
        color: "glow-sm-orange",
    },
    {
        code: "3d",
        name: "Impresión 3D",
        // logo: Imp3DSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/3d.svg",
        color: "glow-sm-teal",
    },
    {
        code: "hardware",
        name: "Hardware",
        // logo: HardwareSVG as React.FC<React.SVGProps<SVGSVGElement>>,
        logoURL: "/images/hardware.svg",
        color: "glow-sm-red",
    },
] as Technology[];

type TechnologyProps = {
    tech: string;
    glow?: boolean;
    glowColor?: string;
    size?: number;
};

const Technology = ({ tech, glow, glowColor, size = 148 }: TechnologyProps) => {
    return (
        <div className={twMerge("flex justify-center items-center")}>
            {technologies.map((t) => {
                if (t.code === tech) {
                    // const Logo = t.logo as React.FC<
                    //     React.SVGProps<SVGSVGElement>
                    // >;
                    return (
                        <img
                            className={`${
                                glow ? glowColor || "glow-sm-white" : ""
                            }`}
                            width={size}
                            height={size}
                            key={tech}
                            src={t.logoURL}
                            alt={tech}
                        />
                    );
                }
            })}
        </div>
    );
};

export const TechnologiesContainer = ({
    glow,
    color,
    size = 148,
}: {
    glow?: boolean;
    color?: boolean;
    size?: number;
}) => {
    return (
        <div
            className={twMerge(
                "flex flex-wrap justify-center mt-12 max-w-[1000px]",
                size < 148 ? "gap-7" : "",
            )}
        >
            {technologies.map((tech) => (
                <Technology
                    key={tech.code}
                    tech={tech.code}
                    glow={glow}
                    glowColor={color ? tech.color : undefined}
                    size={size}
                />
            ))}
        </div>
    );
};

export default Technology;
