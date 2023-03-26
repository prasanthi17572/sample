import image from './lizard.jpg'
import './lmsas1.css';
function As1cards(){
    return(
      <div className="C1">
      <div className="ui card">
      <div className="image">
        <img src={image} width="200"/>

      </div>
      <div className="content">
        <a className="header">Lizard</a>
        <div className="description">
          Lizard are widespraed group of squamate reptiles ,with over 6000 species
          ranging across all comtinents except Antartica
        </div>
      </div>
      
        <div>
        <button className="button">
         SHARE
       </button>
       <button className="button">
        LEARN MORE
       </button>
        </div>
      </div>
      </div>
    );
}
export default As1cards;