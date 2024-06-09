import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SearchBar from '../SearchBar';

export default function RootLayout() {
  return (
    <div className="align-baseline">
         <Header/>    
    <main className="flex-grow">
        <SearchBar/>
        <Outlet />
    </main>
        <Footer/>
  </div>
  )
}
