import React from "react";
import "./Universities.css";


const Universites = () => {

    const UniversitiesOfUK = [
        "University of Greenwich",
        "Coventry University",
        "Ulster University",
        "London South Bank University",
        "Northumbria University",
        "University of Creative Arts",
        "London Metropolitan University",
        "DMU",
        "Aston University",
        "University of Gloucestershire",
        "Regent college london",
        "Canterbury Christ Church University",
        "UWTSD (University of Wales Trinity Saint Davids)",
        "University of South wales",
        "University of Bradford",
        "Anglia ruskin university",
        "Abertay University",
        "University of Law",
        "Buckinghumshire new university",
        "Ravensvourne university",
        "University of roehampton",
        "BPP UNIVERSITY",
        "University of Chester",
        "University of Westminster",
        "Wrexham University",
        "Teesside University",
        "University of Huddersfield",
        "BGU Bishop Grosseteste University",
        "Richmond American International University",
        "University of East London",
        "University of Bedfordshire",
        "University of Northampton",
        "University of Hertfordshire",
        "University of Derby"
    ];

    const UniversitiesOfUSA = [
        "Avila University",
        "Webster university",
        "Concordia University",
        "California states University",
        "Depaul University",
        "Florida Atlantic University",
        "University of Illinois",
        "Texas A&M University",
        "Western Washington University",
        "University of Hartford",
        "Long island University",
        "San Fransisco State University",
        "Mercy University",
        "University of South Carolina",
        "Florida International University",
        "Louisiana State University",
        "American University"
    ];

    const UniversitiesOfAustralia = [
        "Western Sydney University",
        "SAIBT pathway to University of South Australia",
        "SIBT pathway to Western Sydney University",
        "La Trobe College Pathway to La Trobe University",
        "Edith Cowan College Pathway to Edith Cown University",
        "Curtin College Pathway to Curtin University",
        "Deakin College Pathway to Deakin University",
        "Griffith College Pathway to Griffith University",
        "La Trobe University",
        "Swinburne University of Technology",
        "Charles Darwin University International College",
        "University of Tasmania",
        "Victoria University"
    ];

    const closeHandler1 = (e) => {
        const australiaUniversitiesListSection = document.getElementById("australiaUniversitiesListSection");
        australiaUniversitiesListSection.style.display = "none";
    }

    const closeHandler2 = (e) => {
        const ukUniversitiesListSection = document.getElementById("ukUniversitiesListSection");
        ukUniversitiesListSection.style.display = "none";
    };

    const closeHandler3 = (e) => {
        const usaUniversitiesListSection = document.getElementById("usaUniversitiesListSection");
        usaUniversitiesListSection.style.display = "none";
    };

    const showHandler1 = (e) => {
        closeHandler2();
        closeHandler3();
        const australiaUniversitiesListSection = document.getElementById("australiaUniversitiesListSection");
        australiaUniversitiesListSection.style.display = "block";
    };

    const showHandler2 = (e) => {
        closeHandler1();
        closeHandler3();
        const ukUniversitiesListSection = document.getElementById("ukUniversitiesListSection");
        ukUniversitiesListSection.style.display = "block";
    };

    const showHandler3 = (e) => {
        closeHandler1();
        closeHandler2();
        const usaUniversitiesListSection = document.getElementById("usaUniversitiesListSection");
        usaUniversitiesListSection.style.display = "block";
    };

    return (
        <div>
            <div className="universitiesContainer" id="universities">
                <h1>Universities In Panel</h1>
                <p className="universitiesText">
                    Paramount connects you with leading universities around the globe, ensuring you have the
                    best options for your education journey. Whether you’re aiming to study in the UK,
                    USA, or Australia, we make the process seamless and informative. Explore the universities by
                    clicking below to find the perfect match for your future.
                </p>
                <div className="universities">
                    <div className="university">
                        <h2 onClick={showHandler1}><a>Australia</a></h2>
                    </div>
                    <div className="university">
                        <h2 onClick={showHandler2}><a>UK</a></h2>
                    </div>
                    <div className="university">
                        <h2 onClick={showHandler3}><a>USA</a></h2>
                    </div>
                </div>
            </div>
            <div className='universitiesListSection' id="australiaUniversitiesListSection">
                <ul>
                    {UniversitiesOfAustralia.map((uni, i) => (
                        <li>{i + 1}. {uni}</li>
                    ))}
                </ul>
            </div>
            <div className='universitiesListSection' id="ukUniversitiesListSection">
                <ul>
                    {UniversitiesOfUK.map((uni, i) => (
                        <li>{i + 1}. {uni}</li>
                    ))}
                </ul>
            </div>
            <div className='universitiesListSection' id="usaUniversitiesListSection">
                <ul>
                    {UniversitiesOfUSA.map((uni, i) => (
                        <li>{i + 1}. {uni}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Universites;
