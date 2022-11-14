import React, { Component } from 'react';
import Card from './card';

import startup from'../Coursecardui/startup.jpg';
import reachup from '../Coursecardui/reachup.jpg';
import women from '../Coursecardui/women.jpg';
import ui from '../Coursecardui/ui.jpg';
import python from '../Coursecardui/python.png';
import business from '../Coursecardui/business.png'
import './card-style.css';
class Cards extends Component{

    render(){
        return(
                <div className="container-fluid d-flex postion">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={startup} title="Start-Up"p="Startups are young companies founded to develop a unique product or service, bring it to market and make 
                            it irresistible and irreplaceable for customers"/>
                        </div>
                            <div className="col-md-4">
                                <Card imgsrc={reachup} title="Reach-Up"p="Vermont Reach Up helps families with children by providing services that support work, cash assistance for basic 
                                necessities, and health insurance"/>
                            </div>
                                <div className="col-md-4">
                                    <Card imgsrc={women}title="Women Empowerment"p="Women's empowerment can be defined to promoting women's sense of self-worth, their ability to determine their own choices, and their right to influence 
                                    social change for themselves and others"/>
                                </div>
                               
                                {/* another section or row */}
                               
                                 <div className="col-md-4">
                            <Card imgsrc={ui} title="UI/UX Design"p="User interface (UI) design is the process designers use to build interfaces in software or computerized devices,
                             voice-controlled interfaces."/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={python} title="Python Course"p="Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. 
                            Python is a general-purpose language"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={business} title="Business Course"p="Business refers to an enterprising entity or organization that carries out professional activities. 
                            They can be commercial, industrial, or others"/>
                        </div>
                    </div>
                    
                </div>
        );
    }
}   
export default Cards;