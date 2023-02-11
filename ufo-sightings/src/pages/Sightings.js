import "./Sightings.css"
import React from 'react';
import Image from "../backbround_image/arnold.webp";
import ImageTwo from "../backbround_image/roswell.webp";
import ImageThree from "../backbround_image/lights.jpeg.webp";

const Sightings = () => {

  return (
    <div className="about">
      <h1>Here are the top famous sightings so far!</h1>
      <div className="sighting">
        <h2>Kenneth Arnold</h2>
        <img src={Image} width="600" height="400" alt="cam"/>
        <p>The origin of today’s fascination can be traced back 
          to civilian pilot Kenneth Arnold. While flying his small 
          aircraft near Washington’s Mount Rainier on June 24, 1947,
          Arnold claimed to have seen nine blue, glowing objects 
          flying fast—at an estimated 1,700 m.p.h.—in a “V” formation.
           He first believed the objects to be some sort of new military 
           aircraft—this was, after all, just two years after WWII 
           and the first year of the Cold War—but the military confirmed 
           there were no tests being conducted near Mount Rainier that day.
            When Arnold described the crafts' motion as similar to “a saucer 
            if you skip it across water,” the media coined the now-ubiquitous 
            phrase “flying saucer.” </p>
      </div>
      <div className="sighting">
        <h2>Roswell</h2>
        <img src={ImageTwo} width="600" height="400" alt="cam"/>
        <p>It’s the mother of all UFO sightings, but no object was actually 
          observed flying in the Roswell incident. In the summer of 1947, 
          rancher William “Mac” Brazel discovered mysterious debris in one of 
          his New Mexico pastures, including metallic rods, chunks of plastic 
          and unusual, papery scraps. After Brazel reported the wreckage, soldiers 
          from nearby Roswell Army Air Force Base came to retrieve the materials. 
          News headlines claimed that a “flying saucer” crashed in Roswell, 
          but military officials said it was only a downed weather balloon. 
          <br></br>
          Ever since, conspiracy theorists have been hard at work trying to prove 
          the wreckage was extraterrestrial, with one man, Ray Santilli, going 
          so far as to release a video in 1995 of an alien "dissection" purported 
          to have taken place after the incident. (Santilli would admit in 2006 
          that it was a staged film, but he maintained that it was based on 
          actual footage.)
          <br></br>
          As it turns out, the government was indeed covering something up—but it 
          wasn’t aliens. The crashed weather balloon was, in fact, part of a 
          top-secret military endeavor called Project Mogul, which launched 
          high-altitude balloons carrying equipment used to detect Soviet nuclear 
          tests. The Air Force provided plenty of proof in a 231-page report 
          released in 1997 called “Case Closed: Final Report on the Roswell 
          Crash.” Though the mystery has been thoroughly debunked, interest in 
          the case has only grown, and Roswell’s tourism is heavily based around 
          its famous so-called UFO sighting. 
          </p>
      </div>
      <div className="sighting">
        <h2>Lubbock Lights</h2>
        <img src={ImageThree} width="600" height="400" alt="cam"/>
        <p>On the evening of August 25, 1951, three science professors from Texas 
          Tech were enjoying an evening outdoors in Lubbock, when they looked up 
          and saw a semicircle of lights flying above them at a high speed. Over 
          the next few days, dozens of reports flooded in from across town—Texas 
          Tech freshman Carl Hart Jr., even snapped photos of the so-called Lubbock 
          Lights phenomenon, which were published in newspapers across the country 
          and LIFE magazine. 
          <br></br>
          Project Blue Book, which led the Air Force inquiries into UFOs, investigated 
          the events, and its official conclusion was that the lights were birds 
          reflecting the luminescence from Lubbock’s new street lamps. Many people 
          who saw the lights, however, refuse to accept this explanation, arguing 
          that the lights were flying too fast.</p>
      </div>
    </div>
  )
}
export default Sightings;