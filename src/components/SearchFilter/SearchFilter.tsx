import searchIcon from '../../../public/search-icon.png'
import Image from 'next/image'
import styles from './SearchFilter.module.scss'

export function SearchFilter() {
  return (
    <div className={styles.container}>
      <Image 
        src={searchIcon}
        width={25}
        height={25}
        alt='Icone de procura'
        className={styles.image}
      />
      <input
        type="text"
        placeholder="busque por um item"
      />
    </div>
  )
}