import React from 'react'
import './index.css'

const FiltersGroup = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    updateSelectedEmploymentTypes,
    updateSalaryRange,
  } = props
  const onChangeEmploymentType = event => {
    updateSelectedEmploymentTypes(event.target.value)
  }

  const onChangeSalaryRange = event => {
    updateSalaryRange(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div>
        <h1 className="filter-head">Type of Employment</h1>
        <ul className="type-list-container">
          {employmentTypesList.map(type => (
            <li key={type.employmentTypeId} className="filter-type-container">
              <input
                type="checkbox"
                id={type.employmentTypeId}
                value={type.employmentTypeId}
                onChange={onChangeEmploymentType}
              />
              <label className="label-filter" htmlFor={type.employmentTypeId}>
                {type.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <h1 className="filter-head">Salary Range</h1>
        <ul className="salary-range-container">
          {salaryRangesList.map(range => (
            <li key={range.salaryRangeId} className="filter-type-container">
              <input
                type="radio"
                id={range.salaryRangeId}
                name="salary"
                value={range.salaryRangeId}
                onChange={onChangeSalaryRange}
              />
              <label className="label-filter" htmlFor={range.salaryRangeId}>
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FiltersGroup
