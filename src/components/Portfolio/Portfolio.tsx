import React from 'react'
import "./portfolio.css";
export default function Portfolio() {
    const itemsHeight = {
        firstItem: {
            first: {
                height: '42.3vh',
            },
            second: {
                height: '33.74vh',
            }
        },
        secondItem: {
            first: {
                height: '34.6vh',
            },
            second: {
                height: '41.4vh',
            }
        },
        thirdItem: {
            first: {
                height: '46vh',
            },
            second: {
                height: '29.6vh',
            }
        },
    }
    return (
        <div  id="portfolio-con">
            <p id="portfo-title">Portfolio</p>
            <div id="portfolio">
                <Projects height={itemsHeight.firstItem} />
                <Projects height={itemsHeight.secondItem} />
                <Projects height={itemsHeight.thirdItem} />
            </div>
        </div >
    )
}

function Projects(props) {
    return (
        <div id="project-items-con" >
            <section id="project-item-1" style={{ height: props.height.first.height }}></section>
            <section id="project-item-2" style={{ height: props.height.second.height }}></section>
        </div>

    )
}