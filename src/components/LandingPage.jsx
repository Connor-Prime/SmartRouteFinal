import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import './landingpage.css'; 

const LandingPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/createRoute');
  };

  return (
    <div className="landing-page">
      <div className="centered-content">
        
        <img src="/public/welcome 8.svg" alt="Smart Route Logo" className="logo" />
        
        <Button variant="success" className="mt-5 proceed-button" onClick={handleProceed}>Let's Go!</Button>

        <p style={{ fontSize: 'x-small', textAlign: 'bottom' }}>&copy; 2024 SmartRoute W.C.C.C all rights reserved</p>

      </div>
    </div>
  );
};

export default LandingPage;
