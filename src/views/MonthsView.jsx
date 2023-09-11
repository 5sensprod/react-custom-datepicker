import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styles from '../Calendar.module.css'
import { abbreviateMonth } from '../utils/dateFunctions'
import { handleNavigationKeys } from '../utils/dateNavigations'
import useDesignStyles from '../hooks/useDesignStyles'
import alternativeStyles from '../AlternativeCalendar.module.css'

/**
 * Vue des mois dans le calendrier.
 *
 * @param {Object} props - Propriétés pour MonthsView.
 * @param {Function} props.handleMonthClick - Fonction appelée lorsqu'un mois est sélectionné.
 * @param {Date} props.selectedDate - La date actuellement sélectionnée.
 * @param {Object} props.translations - Traductions pour les mois.
 */
function MonthsView({
  handleMonthClick,
  selectedDate,
  translations,
  designType,
}) {
  const monthsRefs = useRef([])

  const handleMonthKeyDown = (e, index) => {
    handleNavigationKeys(e, index, 11, handleMonthClick, monthsRefs.current)
  }

  const { selectedStyles, designClass, monthClass, monthsContainerClass } =
    useDesignStyles(designType)

  return (
    <div
      className={`${selectedStyles.monthsContainer} ${styles.monthsContainer} ${
        designClass ? alternativeStyles[designClass] : ''
      } ${monthsContainerClass}`}
    >
      {translations.shortMonths.map((month, index) => (
        <div
          key={month}
          className={`${styles.month} ${monthClass} ${
            index === selectedDate.getMonth() ? styles.selectedMonth : ''
          }`}
          onClick={(event) => {
            event.stopPropagation()
            handleMonthClick(index)
          }}
          onKeyDown={(e) => handleMonthKeyDown(e, index)}
          ref={(el) => (monthsRefs.current[index] = el)}
          tabIndex={0}
        >
          {abbreviateMonth(month)}
        </div>
      ))}
    </div>
  )
}

MonthsView.propTypes = {
  handleMonthClick: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  translations: PropTypes.shape({
    shortMonths: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
}

export default MonthsView
