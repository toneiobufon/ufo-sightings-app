import "./Shows.css"
import Image from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/futurama.jpg";
import ImageTwo from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/star_wars.jpg";
import ImageThree from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/x_files.jpg";
import ImageFour from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/mib.jpg";
import ImageFive from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/et.jpg";
import ImageSix from "/Users/shu/Desktop/repos/ufo-sightings-app/ufo-sightings/src/shows_movies/monst_aliens.jpg";

const Shows = () => {

  return (
    <div className="shows_movies">
      <h1>Here are some shows and movies you can that feature aliens/ UFOs!</h1>
      <div className="shows"> 
        <h1>Futurama</h1>
        <img src={Image} width="300" height="400" alt="cam"/>
      </div>
      <div className="shows"> 
        <h1>Star Wars</h1>
        <img src={ImageTwo} width="500" height="300" alt="cam"/>
      </div>
      <div className="shows"> 
        <h1>X-Files</h1>
        <img src={ImageThree} width="300" height="400" alt="cam"/>
      </div>

      <div className="movies"> 
        <h1>Men In Black</h1>
        <img src={ImageFour} width="500" height="300" alt="cam"/>
      </div>
      <div className="movies"> 
        <h1>E.T</h1>
        <img src={ImageFive} width="300" height="400" alt="cam"/>
      </div>
      <div className="movies"> 
        <h1>Monsters vs Aliens</h1>
        <img src={ImageSix} width="300" height="400" alt="cam"/>
      </div>
    </div>
  )
}
export default Shows;