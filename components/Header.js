import { ConnectButton } from "web3uikit"
import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { lightTheme, darkTheme } from "../components/Themes"
import React, { useState, useEffect } from "react"
import { useDarkMode } from "../components/useDarkMode"
import Toggle from "../components/Toggler"

export default function Header(props) {
    return (
        <nav className="px-5 border-b-[1px] shadow-md">
            <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
                <Link href="/">
                    <a className="flex flex-row items-center dark:hover:text-gray-100 hover:text-slate-500">
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="40pt"
                            height="40pt"
                            viewBox="0 0 512.000000 512.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                fill="currentColor"
                                stroke="none"
                            >
                                <path
                                    d="M2486 5099 c-67 -36 -2100 -1211 -2115 -1223 -8 -6 -22 -29 -32 -51
        -18 -38 -19 -102 -19 -1265 0 -1163 1 -1227 19 -1265 10 -22 24 -45 32 -51 17
        -14 2060 -1194 2118 -1223 51 -27 91 -26 144 0 53 27 2038 1172 2090 1206 23
        15 46 41 58 66 18 41 19 85 19 1267 0 1182 -1 1226 -19 1267 -12 25 -35 51
        -58 66 -52 34 -2037 1179 -2090 1206 -52 26 -97 26 -147 0z m1050 -866 l964
        -556 0 -1117 0 -1117 -964 -556 c-530 -307 -969 -557 -975 -557 -7 0 -446 251
        -976 557 l-965 557 0 1116 0 1116 963 557 c529 306 968 556 976 556 7 1 447
        -249 977 -556z"
                                />
                                <path
                                    d="M1050 3168 c-18 -13 -43 -36 -54 -51 -21 -28 -21 -36 -21 -555 0
        -501 1 -529 19 -559 38 -62 132 -91 194 -59 15 8 38 26 52 41 l25 27 5 326 5
        327 19 -40 c10 -22 72 -168 137 -324 66 -156 126 -295 134 -308 34 -52 70 -63
        200 -63 143 0 177 13 212 80 l23 43 0 507 0 507 -23 43 c-53 100 -192 107
        -254 13 -16 -24 -19 -61 -23 -351 l-5 -325 -139 334 c-76 184 -148 345 -160
        357 -40 45 -68 52 -194 52 -107 0 -122 -2 -152 -22z"
                                />
                                <path
                                    d="M2344 3176 c-17 -8 -42 -29 -55 -47 l-24 -34 -3 -525 c-2 -485 -1
        -528 15 -559 29 -55 65 -76 133 -76 68 0 105 21 132 76 15 28 18 61 18 177 l0
        142 175 0 c197 0 227 7 266 61 33 46 34 130 2 175 -41 57 -71 64 -267 64
        l-176 0 0 130 0 130 253 0 c242 0 255 1 297 23 101 51 107 190 11 254 -34 23
        -36 23 -390 23 -276 -1 -363 -4 -387 -14z"
                                />
                                <path
                                    d="M3373 3174 c-85 -42 -102 -176 -31 -242 35 -32 79 -42 180 -42 l87 0
        3 -429 c3 -418 4 -430 24 -458 72 -97 186 -97 258 0 20 28 21 40 24 457 l3
        428 109 4 c91 3 113 7 137 24 91 68 85 213 -11 258 -51 24 -735 24 -783 0z"
                                />
                            </g>
                        </svg>
                        <h1 className="py-4 px-1 font-bold text-3xl">Marketplace</h1>
                    </a>
                </Link>
                <div className="flex flex-row items-center">
                    <Link href="/">
                        <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                            Home
                        </a>
                    </Link>
                    <Link href="/sell-nft">
                        <a className="mr-4 p-6 dark:hover:text-gray-100 hover:text-slate-500">
                            Sell NFT
                        </a>
                    </Link>
                    <ConnectButton moralisAuth={false} />
                    <Toggle theme={props.theme} toggleTheme={props.themeToggler} />
                </div>
            </div>
        </nav>
    )
}
