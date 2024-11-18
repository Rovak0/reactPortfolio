import { Link } from 'react-router-dom';
import Header from './UI/header';

export default function Head() {
    //this will call the header function to make the header
    return (
        <Header
            sections={[
                <Link key = {1}>
                    aboutMe
                </Link>,
                <Link key = {2}>
                    placeholder0
                </Link>,
                <Link key = {3}>
                    placeholder1
                </Link>,
            ]}
        />
    )
};