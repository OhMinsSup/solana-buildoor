'use client'
import React, { useMemo } from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { clusterApiUrl } from "@solana/web3.js"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"

import { extendTheme } from "@chakra-ui/react"

const colors = {
  background: "#1F1F1F",
  accent: "#833BBE",
  bodyText: "rgba(255, 255, 255, 0.75)",
}

const theme = extendTheme({ colors })

type ClientProviderProps = {
  children: React.JSX.Element
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const url = useMemo(() => clusterApiUrl("devnet"), [])
  const phantom = new PhantomWalletAdapter()

  return (
    <ChakraProvider theme={theme}>
      <ConnectionProvider endpoint={url}>
        <WalletProvider wallets={[phantom]}>
          <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  )
}
