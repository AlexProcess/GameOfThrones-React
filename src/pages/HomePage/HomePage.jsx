import React from "react";
import './HomePage.scss'
import Languages from "../../components/Languages/Languages";

export const HomePage = () => {
  return (
    
    <>
    <main className="main__container">
      <div className="languages__contain"><Languages/></div>
      <h1 className="b-home__title">GAMES OF THRONES</h1>
    </main>
    </>
  );
};

export default HomePage;