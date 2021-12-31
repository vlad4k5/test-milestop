import React, { useState, FC } from 'react'

type TFilters = {
  getNewUsers: (gender: string) => void
}

const Filters: FC<TFilters> = ({ getNewUsers }) => {
  const [gender, setGender] = useState('')

  const onChangeGenderFilter = (e: any) => {
    setGender(e.target.value)
  }

  const onApplyFilters = () => {
    getNewUsers(gender)
  }
  return (
    <div>
      <select onChange={onChangeGenderFilter}>
        <option value="" label="All" />
        <option value="male" label="Male" />
        <option value="female" label="Female" />
      </select>
      <button onClick={onApplyFilters}>Apply Filters</button>
    </div>
  )
}

export default Filters
