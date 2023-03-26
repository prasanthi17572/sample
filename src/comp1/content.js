import './card.css'
function Card1(props){
    return(
      <div className="card">
      <div className="ui card">
      <div className="content">
        <p className="header">{props.heading}</p>
        <p className="description">{props.matter}</p>
      </div>
      </div>
    </div>
    );
}
export default Card1;