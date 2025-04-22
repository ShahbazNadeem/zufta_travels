import "@/globalcss";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react"
export default function App({session, Component, pageProps }) {
  return (
    <>
     <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
     </SessionProvider>
    </>
  );
}
