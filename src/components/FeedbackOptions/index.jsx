import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const handlClick = evt => {
    const name = evt.target.textContent.toLowerCase();
    onLeaveFeedback(name);
  };

  return (
    <div className={css.container}>
      <button className={css.btn} onClick={handlClick}>
        Good
      </button>
      <button className={css.btn} onClick={handlClick}>
        Neutral
      </button>
      <button className={css.btn} onClick={handlClick}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onClick: PropTypes.func,
};
