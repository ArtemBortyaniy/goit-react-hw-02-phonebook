import css from './Title.module.css'
import PropTypes from 'prop-types';

export const Title = ({ title, H1 }) => {
    return (
        <div className={css.container}>
        {H1 ? <h1>{title}</h1> : <h2>{title}</h2>}
        </div>
    );
}

Title.propTypes = {
    title : PropTypes.string.isRequired,
    H1 : PropTypes.string,
}