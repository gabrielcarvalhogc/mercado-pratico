import { SearchFilter } from '@/components/SearchFilter/SearchFilter';
import './globals.css';
import { Header } from '@/components/Header/header'

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
