import React from "react";
import Heading from "../../../components/heading/Heading";
import "./Hero.css";
import { Button } from '@mantine/core';

const Hero = () => {
  return (
    <>
  
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO DOT Learning Academy"
              title="Best Online Education For You"
            />
            <p>
              DOT Ethiopia is a network of daring young social innovators who
              are creating opportunities and transforming communities.
            </p>
             <div >
                <Button color="orange" radius="md" size="xl">
                  Get Started Now <i className="fa fa-long-arrow-alt-right"></i>
                </Button>
            </div> 
          </div>
        </div>
      </section>
      <div className="margin"></div>
      
    </>
  );
};

export default Hero;
