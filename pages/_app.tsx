import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
// import { ApolloProvider } from "@apollo/client";
// import { useApollo } from "src/apollo";
import { AuthProvider } from 'src/auth/useAuth'
import '../styles/index.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <AuthProvider>
        <Head>
          <title>Home sweet home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
