import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import ClientComponent from './pageComponents/componentClient/clientComponent'

export default function Home() {


  return (
    <div>
      <div>ola mundo</div>
      <ClientComponent />
    </div>

  )
}
