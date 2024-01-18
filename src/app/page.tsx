import { SearchFilter } from '@/components/SearchFilter';
import './globals.css';
import { Header } from '@/components/header'

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <SearchFilter/>
      </main>
    </>
  )
}
