import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Address.css';

function Address() {
    // 4208585190116667
    // 06 2027
    // 508 Cv


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    // State for form fields
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [firstName, setFirstName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // State for field-specific errors
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const cartTotal = localStorage.getItem('cartTotal');
        if (cartTotal) {
            setAmount(parseFloat(cartTotal));
        }
    }, []);

    // Function to validate all fields
    const validateForm = () => {
        let fieldErrors = {};

        if (!email) fieldErrors.email = "Email is required";
        if (!title) fieldErrors.title = "Please select a title";
        if (!firstName) fieldErrors.firstName = "First name is required";
        if (!streetAddress) fieldErrors.streetAddress = "Street address is required";
        if (!city) fieldErrors.city = "City is required";
        if (!state) fieldErrors.state = "State is required";
        if (!zipCode) fieldErrors.zipCode = "ZIP code is required";
        if (!phoneNumber) fieldErrors.phoneNumber = "Phone number is required";

        setErrors(fieldErrors);

        // Return true if there are no errors
        return Object.keys(fieldErrors).length === 0;
    };

    const handlePayment = async () => {
        if (!validateForm()) {
            setError("Please fill in all required fields.");
            return;
        }

        const data = {
            name: `${firstName} `,
            mobileNumber: phoneNumber,
            amount,
        };

        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://13.49.73.215:5000/create-order', data);
            window.location.href = response.data.url;
        } catch (error) {
            setError("Payment failed. Please try again.");
            console.error("Error in payment:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = () => {
        navigate('/shop'); 
      };
    return (
        <div className='bodyaddress'>
            <div className="container">
                <a onClick={handleSubmit} className="back-link">Back to shop</a>
                <br /><br />
                <div className="section-title">
                    <i className="fas fa-circle"></i> Shipping
                </div>

                {error && <div className="error-message">{error} <br /> <br /> </div> }

                <div className="form-group">
                    <label htmlFor="email">Your e-mail address <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <div className="field-error">{errors.email}&#9757; </div>}
                </div>

                <div className="form-group">
                    <label>Send my order to  <i className="fas fa-info-circle info-icon"></i></label>
                    <div className='gender'>
                        <div>
                            <input type="radio" id="mr" className='btn' name="title" value="mr"  onChange={(e) => setTitle(e.target.value)}  />
                            <label for="mr">Mr.</label>
                        </div>
                        <div>
                            <input type="radio" id="ms" className='btn' name="title" value="ms"   onChange={(e) => setTitle(e.target.value)} />
                            <label for="ms">Ms.</label>
                        </div>
                        <div>
                            <input type="radio" id="mx" className='btn' name="title" value="mx"  onChange={(e) => setTitle(e.target.value)}  />
                            <label for="mx">Mx.</label>
                        </div>
                        <div>
                            <input type="radio" id="company" className='btn' name="title" value="company"  onChange={(e) => setTitle(e.target.value)} />
                            <label for="company">Company</label>
                        </div>

                    </div>
                    {errors.title && <div className="field-error">{errors.title}&#9757;</div>}
                </div>

                {/* Additional fields */}
                <div className="form-group">
                    <label htmlFor="first-name">First name  <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <div className="field-error">{errors.firstName}&#9757;</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="last-name">Last name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="last-name"                   
                    />

                </div>

                <div className="form-group">
                    <label htmlFor="street-address">Street address  <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="text"
                        id="street-address"
                        name="street-address"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                    />
                    {errors.streetAddress && <div className="field-error">{errors.streetAddress}&#9757;</div>}
                </div>
                <div class="form-group">
                    <label for="additional-address">Additional address information</label>
                    <input type="text" id="additional-address" name="additional-address" />
                </div>
                <div class="form-group">
                    <label for="country">Country</label>
                    <select id="country" name="country">
                        <option>India</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City  <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    {errors.city && <div className="field-error">{errors.city}&#9757;</div>}
                </div>

                <div class="form-group">
                    <label for="state">State  <i className="fas fa-info-circle info-icon"></i></label>
                    <select id="state" name="state"  value={state}  onChange={(e) => setState(e.target.value)} >
                        <option value="">Select...</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OD">Odisha</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TS">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="CH">Chandigarh</option>
                        <option value="DN">Dadra and Nagar Haveli and Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="PY">Puducherry</option>
                    </select>
                    {errors.state && <div className="field-error">{errors.state}&#9757;</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="zip-code">ZIP Code  <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="text"
                        id="zip-code"
                        name="zip-code"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                    {errors.zipCode && <div className="field-error">{errors.zipCode}&#9757;</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="phone-number">Phone number <i className="fas fa-info-circle info-icon"></i></label>
                    <input
                        type="text"
                        id="phone-number"
                        name="phone-number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {errors.phoneNumber && <div className="field-error">{errors.phoneNumber}&#9757;</div>}
                </div>

                <button
                    className="continue-btn"
                    onClick={handlePayment}
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Continue"}
                </button>
            </div>
        </div>
    );
}

export default Address;
