'use client'
import React from 'react'
import { HStack, Spacer } from "@chakra-ui/react"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styles from "~/styles/Home.module.css"

export default function Navbar() {
  return (
    <HStack width="full" padding={4}>
      <Spacer />
      <WalletMultiButton className={styles["wallet-adapter-button-trigger"]} />
    </HStack>
  )
}
