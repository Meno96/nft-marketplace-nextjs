import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"
import Header from "../components/Header"
import Head from "next/head"
import { NotificationProvider } from "web3uikit"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../components/GlobalStyles"
import { useDarkMode } from "../components/useDarkMode"
import { lightTheme, darkTheme } from "../components/Themes"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.NEXT_PUBLIC_SUBGRAPH_URL,
})

function MyApp({ Component, pageProps }) {
    const [theme, themeToggler] = useDarkMode()
    const themeMode = theme === "light" ? lightTheme : darkTheme
    return (
        <div className="h-[100vh]">
            <Head>
                <title>NFT Marketplace</title>
                <meta name="description" content="NFT Marketplace" />
                <link rel="icon" href="/nft.png" />
            </Head>
            <ThemeProvider theme={themeMode}>
                <>
                    <GlobalStyles />
                    <MoralisProvider initializeOnMount={false}>
                        <ApolloProvider client={client}>
                            <NotificationProvider>
                                <Header theme={theme} themeToggler={themeToggler} />
                                <Component {...pageProps} />
                            </NotificationProvider>
                        </ApolloProvider>
                    </MoralisProvider>
                </>
            </ThemeProvider>
        </div>
    )
}

export default MyApp
