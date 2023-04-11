import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      <p>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
