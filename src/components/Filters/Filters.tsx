import React, { useState, FC } from 'react'
import './Filters.scss'

type TFilters = {
  getNewUsers: (gender: string, nationality: Array<string>) => void
}

const Filters: FC<TFilters> = ({ getNewUsers }) => {
  const [gender, setGender] = useState('All')
  const [nationality, setNationality] = useState<Array<string>>([])
  const nationalityList = [
    'AU',
    'BR',
    'CA',
    'CH',
    'DE',
    'DK',
    'ES',
    'FI',
    'FR',
    'GB',
    'IE',
    'IR',
    'NO',
    'NL',
    'NZ',
    'TR',
    'US',
  ]

  const onChangeGenderFilter = (e: any) => {
    setGender(e.target.value)
  }

  const onChangeNationality = (e: any) => {
    if (nationality.includes(e.currentTarget.value)) {
      setNationality(nationality.filter(elem => elem !== e.target.value))
    } else {
      setNationality([...nationality, e.target.value])
    }
  }

  const clearFilters = () => {
    setNationality([])
    setGender('All')
  }

  const onApplyFilters = () => {
    getNewUsers(gender, nationality)
  }
  return (
    <div className="filters">
      <div className="select">
        <select onChange={onChangeGenderFilter} value={gender}>
          <option value="" label="All" />
          <option value="male" label="Male" />
          <option value="female" label="Female" />
        </select>
      </div>
      <div className="select">
        <select onChange={onChangeNationality} value={nationality} multiple>
          {nationalityList.map(nat => (
            <option key={nat} value={nat} label={nat} />
          ))}
        </select>
      </div>
      <button className="applyFiltersButton" onClick={onApplyFilters}>
        Apply Filters
      </button>
      <button className="clearFiltersButton" onClick={clearFilters}>
        Clear Filters
      </button>
      <span>{nationality}</span>
    </div>
  )
}

export default Filters
