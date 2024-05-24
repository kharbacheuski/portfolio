import { Poppins, Major_Mono_Display, EB_Garamond, Inter, Mulish} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export const mono = Major_Mono_Display({ subsets: ["latin"], weight: ["400"] });
export const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "600", "700", "800"] })
export const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
export const mulish = Mulish({ subsets: ["latin"], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })