import React from 'react'
import styles from './assets/scss/Emaillist.scss';
import Email from './Email';
import {PropTypes} from 'prop-types';

const Emaillist = ({emails}) => {
  return (
    <ul className={styles.Emaillist}>
      {
        emails.map(email => <Email
                            key={email.no}
                            firstName={email.firstName}
                            lastName={email.lastName}
                            email={email.email}
                            /> )}
    </ul>
  )
}

export default Emaillist

Emaillist.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.shape(Email.propTypes))
}