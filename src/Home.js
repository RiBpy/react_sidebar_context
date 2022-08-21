import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
const Home = () => {
  const{openSidebar,openModal}=useGlobalContext()
  return <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars/>
    </button>
    <div className="button btn" onClick={openModal}>
      Show Modal
    </div>
  </main>
}

export default Home
