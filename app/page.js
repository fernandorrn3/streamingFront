import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import ClientComponent from './pageComponents/componentClient/clientComponent'

export default function Home() {


  return (
    <div>
     <h1>ola uppp</h1>
      <ClientComponent />
    </div>

  )
}
