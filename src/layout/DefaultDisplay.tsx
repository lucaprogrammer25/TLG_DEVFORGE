import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
interface Props {
  // Definisci le tue props qui
}

const DefaultDisplay: React.FC<Props> = ({ /* props */ }) => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default DefaultDisplay;