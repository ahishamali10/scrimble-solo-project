import {useState} from 'react'
import './App.css'
import Badge from "./Components/Badge/index.js";
import Banner from "./Components/Banner/index.js";
import Card from "./Components/Card/index.js";
import Testimonial from "./Components/Testimonial/index.js";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',gap: '4rem'}}>
            <Badge color={'red'} shape={'square'}>
                Badge
            </Badge>
            <Banner title={'Congratulations!'}>
            </Banner>
            <Card>
                <Card.Icon>
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 15C2.79086 15 1 13.2091 1 11C1 9.09295 2.33457 7.4976 4.12071 7.09695C4.04169 6.74395 4 6.37684 4 6C4 3.23858 6.23858 1 9 1C11.4193 1 13.4373 2.71825 13.9002 5.00098C13.9334 5.00033 13.9666 5 14 5C16.7614 5 19 7.23858 19 10C19 12.419 17.2822 14.4367 15 14.9M13 12L10 9M10 9L7 12M10 9L10 21"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </Card.Icon>
                <Card.Title>Easy Deployment</Card.Title>
                <Card.Body>
                    Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                </Card.Body>
            </Card>
            <Testimonial>

            </Testimonial>
        </div>
    )
}

export default App