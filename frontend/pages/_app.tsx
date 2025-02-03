import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, ConnectButton} from "thirdweb/react";
import { createThirdwebClient } from "thirdweb";

const activeChain = "ethereum"
const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
} as any);

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <ThirdwebProvider>
      <Component {...pageProps} />
    </ThirdwebProvider>
);
}
