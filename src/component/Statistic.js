import PropTypes from 'prop-types';

export default function Statistic(props){
      return ( <section className="statistics">
      <h2 className="title">Upload stats</h2>
    
      <ul className="stat-list">
        <li className="item">
          <span className="label">.docx</span>
      <span className="percentage"> {props.docx}%</span>
        </li>
        <li className="item">
          <span className="label">.mp3</span>
      <span className="percentage"> {props.mp3}%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
      <span className="percentage"> {props.pdf}%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
      <span className="percentage"> {props.mp4}%</span>
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
