import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Header from './components/generic/Header';
import Epoch from './components/epoch/Epoch';
import Footer from './components/generic/Footer';
import About from './components/about/About';
//import DevWatch from "@/components/dev/DevWatch";
//import BankWatch from "@/components/bank/BankWatch";
//import Whales from "@/data/Whales";
//import Personal from "@/components/personal/Personal";
//import PersonalFront from "@/components/personal/PersonalFront";
import Feedback from './components/feedback/Feedback';
//import FeedbackThanks from "@/components/feedback/FeedbackThanks";
//import WishingWell from "@/components/quest/WishingWell";
//import QuestFront from "@/components/quest/QuestFront";
//import Hero from "@/components/hero/Hero";
//import HeroFront from "@/components/hero/HeroFront";
//import HeroRanking from "@/components/about/HeroRanking";
//import FloorPrice from "@/components/about/FloorPrice";
//import Quests from "@/components/quest/Quests";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/epochs" element={<Epoch />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
// <Footer/>
// <Routes>
//     <Route path='/' element={<Navigate replace to='/personal' />} />
//     <Route path='/dev' element={<DevWatch />} />
//     <Route path='/bank' element={<BankWatch />} />
//     <Route path='/personal' element={<PersonalFront />} />
//     <Route path='/personal/:userAddress' element={<Personal />} />
//     <Route path='/epoch' element={<Epoch />} />
//     <Route path='/quests' element={<QuestFront />} />
//     <Route path='/quests/:userAddress' element={<Quests />} />
//     <Route path='/wishingwell/:userAddress' element={<WishingWell />} />
//     <Route path='/hero' element={<HeroFront />} />
//     <Route path='/hero/:id' element={<Hero />} />
//     <Route path='/feedback' element={<Feedback />} />
//     <Route path='/thankYouForTheFeedback' element={<FeedbackThanks />} />
//     <Route path='/about' element={<About />} />
//     <Route path='/about/heroranking' element={<HeroRanking />} />
//     <Route path='/about/floorprice' element={<FloorPrice />} />
//     <Route path='/whales' element={<Whales />} />
//     <Route path="/*" element={<Navigate replace to="/" />} />
// </Routes>
export default App;
