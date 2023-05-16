'use client'
import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import styles from "~/styles/Home.module.css"
import Navbar from "./navbar"
import Disconnected from "./disconnected"
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "./connected"

export default function Home() {
  const { connected } = useWallet()
  return (
    <div className={styles.container}>
      <Box
        w="full"
        h="calc(100vh)"
        bgImage={connected ? "" : "url(/images/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack w="full" h="calc(100vh)" justify="center">
          { /* NavBar */}
          <Navbar />
          <Spacer />
          <Center>
            { /* If connected, the second view, otherwise the first */}
            {connected ? <Connected /> : <Disconnected />}
          </Center>
          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://twitter.com/_buildspace"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}
