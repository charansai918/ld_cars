import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

const CarRental = () => {
    const [selectedCity, setSelectedCity] = useState("select");
    const [selectedArea, setSelectedArea] = useState("select");
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [cityError, setCityError] = useState("");
    const [areaError, setAreaError] = useState("");
    const [dateTimeError, setDateTimeError] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [displayedDate, setDisplayedDate] = useState("Select Date");

    const navigate = useNavigate();

    const cityAreas = {
        'select': [],
        'andhrapradesh': ["Vijayawada", "Tirupati", "Nellore", "Visakhapatnam", "Rajamahendravaram", "Karnool"],
        'hyderabad': ["Madhapur", "Kukatpally", "L.B.Nagar", "Banjara Hills", "Khairatabad", "Secendrabad", "Hitec City"],
        'hanumakonda': ["HanumaKonda/Warangal", "Kadipikonda", "Hanamkonda", "Kondaparthy", "Lakshkar Bazar", "Manikonda"],
        'bangalore': ["Whitefiled", "Electronic City", "Indiranagar", "Koramangala", "Basavnagudi", "Banashakari"],
        'munbai': ["Juhu", "Worli", "Malabar Hill", "Bandra", "Andheri", "Powai"]
    };

    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
        setSelectedArea('select');
        setCityError("");
    };

    const handelAreaChange = (event) => {
        const area = event.target.value;
        setSelectedArea(area);
        setAreaError("");
    };

    const handleDateChange = (ranges) => {
        setDateRange([ranges.selection]);
        setDateTimeError("");
        setShowCalendar(false); 
        const formattedStartDate = ranges.selection.startDate.toLocaleDateString();
        const formattedEndDate = ranges.selection.endDate.toLocaleDateString();
        setDisplayedDate(`${formattedStartDate} - ${formattedEndDate}`);
    };

    const validateCity = () => {
        if (selectedCity === "select") {
            setCityError("Please select a city");
            return false;
        }
        setCityError("");
        return true;
    };

    const validateArea = () => {
        if (selectedArea === "select") {
            setAreaError("Please select an area");
            return false;
        }
        setAreaError("");
        return true;
    };

    const validateDateTime = () => {
        const startDate = dateRange[0].startDate;
        const endDate = dateRange[0].endDate;
    
        if (!startDate || !endDate || startDate > endDate) {
            setDateTimeError("Please select a valid date range");
            return false;
        }
    
        const currentDate = new Date();
        if (startDate < currentDate) {
            setDateTimeError("Please select a future date");
            return false;
        }
        setDateTimeError("");
        return true;
    };
    
    const handleButtonClick = () => {
        const isCityValid = validateCity();
        const isAreaValid = validateArea();
        const isDateTimeValid = validateDateTime();
    
        if (isCityValid && isAreaValid && isDateTimeValid) {
            navigate('/cars');
        }
    };
    
    return (
        <div>
            <h2 id='smh'>Welcome</h2>
            <p id='pera'>Rent Any Car Enjoy Unlimited Kilometers With Zero <br/>deposit if You're Over 21 Age</p>
            <div className='andhar'>
                <select className='sele'
                    value={selectedCity}
                    onChange={handleCityChange}>
                    <option value='select'>SELECT CITY</option>
                    <option value='andhrapradesh'>ANDHRA PRADESH</option>
                    <option value='hyderabad'>HYDERABAD</option>
                    <option value='hanumakonda'>HANUMKONDA/WARNGAL</option>
                    <option value='bangalore'>BANGLORE</option>
                    <option value='munbai'>Munbai</option>
                </select>
                <select className='sele'
                    value={selectedArea}
                    onChange={handelAreaChange}>
                    <option value='select'>SELECT AREA</option>
                    {cityAreas[selectedCity].map((area, index) => (
                        <option key={index}
                            value={area.toLowerCase().replace(' ', '-')}>{area}</option>
                    ))}
                </select>
                <br />
                <button className='select' onClick={() => setShowCalendar(!showCalendar)}>{displayedDate}</button>
                <br/>
                {showCalendar && (
                    <DateRange
                        ranges={dateRange}
                        onChange={handleDateChange}
                        />)}
                <br/>
                <div className="error-message">{cityError}</div>
                <div className="error-message">{areaError}</div>
                <div className="error-message">{dateTimeError}</div>
                <img
                    id="gretar"
                    src="./imags/greter.png"
                    alt=""
                    onClick={handleButtonClick}
                />
            </div>
        </div>
    );
};

export default CarRental;
