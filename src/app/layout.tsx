import './globals.css'
import '@solana/wallet-adapter-react-ui/styles.css';
import ClientProvider from './client-provider'

export const metadata = {
  title: 'Buildoors',
  description: 'The NFT Collection for Buildoors',
}

type RootLayoutProps = {
  children: React.JSX.Element
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
