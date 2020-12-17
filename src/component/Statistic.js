import PropTypes from 'prop-types';

export default function Statistic(props){
      return ( <section className="statistics">
        {props.title && <h2 className="title">{props.title}</h2>}
    
      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
      <span className="percentage"> {props.stat[0].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
      <span className="percentage"> {props.stat[2].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
      <span className="percentage"> {props.stat[1].percentage}%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
      <span className="percentage"> {props.stat[3].percentage}%</span>
        </li>
      </ul>
      </section>
      );
    };

    Statistic.prototype={
       docx:PropTypes.number.isRequired,
       mp3:PropTypes.number.isRequired,
       pdf:PropTypes.number.isRequired,
       mp4:PropTypes.number.isRequired,
    }
