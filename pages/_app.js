import '../styles/global.css'
//Use the App component to keep state when navigating between pages
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}