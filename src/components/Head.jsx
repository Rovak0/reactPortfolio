import { Link } from 'react-router-dom';
import Header from './UI/header';

export default function Head() {
    //this will call the header function to make the header
    return (
        <Header
            sections={[
                <nav key = {1}>
                    aboutMe
                </nav>,
                <nav key = {2}>
                    placeholder0
                </nav>,
                <nav key = {3}>
                    placeholder1
                </nav>,
            ]}
        />
    )
};