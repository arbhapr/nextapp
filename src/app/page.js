"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/contact');
  }
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <Fade left>
              <h1>NextJS is awesome framework?</h1>
            </Fade>
            <Zoom>
              <p>
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem
                Lorem Lorem Lorem Lorem Lorem
              </p>
            </Zoom>
            <button className="btn btn-warning text-light mx-1">
              Warning Button
            </button>
            <button onClick={() => handleRoute()} className="btn btn-outline-primary mx-1">
              Contact Me
            </button>
          </div>
          <div className="col-lg-6">
            <Bounce left>
              <Image
                src="/picture-500x500.jpg"
                width={300}
                height={200}
                alt="Picture"
              />
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
