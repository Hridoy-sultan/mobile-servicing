import React from 'react';
import AllserviceCount from '../AllServiceCount/AllserviceCount';
import Header from '../Header/Header';
import RepairStep from '../RepairStep/RepairStep';
import Services from '../Services/Services';
import StartRepair from '../StartRepair/StartRepair';
import Testimonials from '../Testimonials/Testimonials';
import LatestNews from '../LatestNews/LatestNews';
import Footer from '../Footer/Footer';
const Home = ({ handleBook }) => {


    return (
        <div>
            <Header></Header>
            <Services handleBook={handleBook}></Services>
            <StartRepair></StartRepair>
            <RepairStep></RepairStep>
            <Testimonials></Testimonials>
            <AllserviceCount></AllserviceCount>
            <LatestNews></LatestNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;