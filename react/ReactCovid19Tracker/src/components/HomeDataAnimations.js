import React, { Component, useEffect } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import StateSearch from './search/StateSearch';
import Footer from './Footer';
import { fetchData } from '../api/';
import InfectedCard from './cards/InfectedCard';
import DeathCard from './cards/DeathCard';
import RecoveredCard from './cards/RecoveredCard';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function HomeDataAnimations() {

    useEffect(() => {
      Aos.init({duration: 2000}); // milliseconds for each animation to complete
    }, []);

  return (
    <div>      
      <section data-aos="fade-up">
        <Card className="bg-dark text-white">
          <Card.Body>
            From closing schools, to stay at home orders, to eviction moratoriums, public policy will have an impact on the spread of the COVID-19 virus and its consequences.
            With the US policy response to the virus primarily left to individual states, researchers at the <a target="_blank" href="https://www.bu.edu/sph/">Boston University 
            School of Public Health</a> started tracking state level legislation and the specific policies that were being implemented in reponse to the COVID-19 pandemic in 
            order to better facilitate global research on the impact of policy on public health and economic outcomes. 
          </Card.Body>
        </Card>
      </section><br />
      <div data-aos="fade-up">
        <Card className="bg-dark text-white">
          <Card.Body>
            The research team is continuously expanding the data it collects and is working to keep all of the current policies up to date. To increase the usefulness
            of the policy data for researchers and the public this web application was built to allow users to filter the data, visualize, map, and compare data by state.           
          </Card.Body>
        </Card>
      </div><br />
      <div data-aos="fade-up">
        <Card className="bg-dark text-white">
          <Card.Body>                      
            The state legislation data collected includes information such as when a state of emergency was declared, when schools were closed, when non-essential businesses
            were closed and more. The number of policies researchers are tracking is growing daily and will soon include further information on health care policies, unemployment, and people
            who are incarcerated. There is also other data tied to the spread of illness such as population density, the number of people who are homeless, and much more.  
          </Card.Body>
        </Card>
      </div><br />
      {/* <div data-aos="fade-up">
        <Card className="bg-secondary text-white">
          <Card.Body>
          </Card.Body>
        </Card>
      </div>
    <br /> */}
    </div>
  )
}


