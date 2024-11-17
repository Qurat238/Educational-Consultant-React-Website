import React, { useState, useEffect, useRef } from 'react';
import "./SuccessStories.css";
import SuccessStoryComponent from './SuccessStoryComponent';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const SuccessStories = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const nextHandler = () => {
        let successStories = document.getElementById("successStories");
        successStories.style.scrollBehavior = "smooth";

        let childWidth = successStories.scrollWidth / successStories.childElementCount;
        let scrolledWidth = successStories.scrollLeft + successStories.clientWidth;
        if (scrolledWidth >= successStories.scrollWidth) {
            successStories.scrollLeft = 0;
        } else {
            successStories.scrollLeft += childWidth;
        }
    };

    const backHandler = () => {
        let successStories = document.getElementById("successStories");
        successStories.style.scrollBehavior = "smooth";
        let childWidth = successStories.scrollWidth / successStories.childElementCount;
        let scrolledWidth = successStories.scrollLeft + successStories.clientWidth;
        if (scrolledWidth >= successStories.scrollWidth) {
            successStories.scrollLeft = 0;
        } else {
            successStories.scrollLeft -= childWidth;
        }
    };


    const successstories = [
        {
            id: "507f1f77bcf86cd799439000",
            name: "MUHAMMAD ADEEL",
            university: "BPP UNIVERSITY",
            gender: "male",
            text: "For Getting UK Student VISA in MSC MANAGEMENT",
        },
        {
            id: "507f1f77bcf86cd799439001",
            name: "IQBAL HUSSAIN",
            university: "GLASGOW CALEDONIAN UNIVERSITY",
            gender: "male",
            text: "For Getting UK Student VISA ON MOI"
        },
        {
            id: "507f1f77bcf86cd799439002",
            name: "SHEHRYAR MALIK",
            university: "UNIVERSITY OF WOLLONGONG",
            gender: "male",
            text: "For Getting Australia Student VISA"
        },
        {
            id: "507f1f77bcf86cd799439003",
            name: "AHSAN KHAN",
            university: "ULSTER UNIVERSITY",
            gender: "male",
            text: "For Getting UK Student VISA",
        },
        {
            id: "507f1f77bcf86cd799439004",
            name: "MANAL FATIMA",
            university: "UNIVERSITY OF SOUTH WALES",
            gender: "female",
            text: "For Getting UK Student VISA"
        },
        {
            id: "507f1f77bcf86cd799439005",
            name: "MESUM ALI",
            university: "BPP UNIVERSITY",
            gender: "male",
            text: "For Getting Australia Student VISA",
        },
        {
            id: "507f1f77bcf86cd799439006",
            name: "KAUSAR NOOR",
            university: "CHESTER UNIVERSITY",
            gender: "female",
            text: "For Getting UK Student VISA",
        },
        {
            id: "507f1f77bcf86cd799439007",
            name: "MUJTABA AFTAB",
            university: "LATROBE UNIVERSITY",
            gender: "male",
            text: "For Getting Australia Student VISA",
        },
        {
            id: "507f1f77bcf86cd799439008",
            name: "AIMAN LUQMAN",
            university: "HERIOT-WATT UNIVERSITy",
            gender: "female",
            text: "For Getting UK Student VISA in DIGITAL MARKETING MSC",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.5,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div className="successStoriesSection">
            <h1 className="successStoriesHeading">SUCCESS STORIES</h1>
            <div className='successStoriesContainerFlex'>
                <button className="leftArrow" onClick={backHandler}>
                    <KeyboardArrowLeftIcon className="icon" />
                </button>
                <div id='successStories' className={`successStories ${isVisible ? "visible" : ""}`} ref={sectionRef}>
                    {successstories && successstories.map((successstory) => <SuccessStoryComponent key={successstory.id} successstory={successstory} />)}
                </div>
                <button className="rightArrow" onClick={nextHandler}>
                    <KeyboardArrowRightIcon className="icon" />
                </button>
            </div>
        </div>
    )
}

export default SuccessStories;