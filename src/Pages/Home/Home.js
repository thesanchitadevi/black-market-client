import React from 'react';
import Category from './Category/Category';
import { Header } from './Header/Header';
import { Stats } from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Category></Category>
            <Stats></Stats>
        </div>
    );
};

export default Home;