import React, { ChangeEvent, useEffect, useState } from 'react'
import './Filteri.scss' // Подключаем файл стилей

const Filtertur: React.FC = () => {
	const [country, setCountry] = useState<string>(
		() => localStorage.getItem('country') || ''
	)
	const cities = ['Bishkek', 'Almata', 'Moscow']
	const [selectedCities, setSelectedCities] = useState<string[]>(() =>
		JSON.parse(localStorage.getItem('selectedCities') || '[]')
	)
	const [type, setType] = useState<string>(
		() => localStorage.getItem('type') || ''
	)
	const [departureCity, setDepartureCity] = useState<string>(
		() => localStorage.getItem('departureCity') || ''
	)
	const [searchClicked, setSearchClicked] = useState<boolean>(false) // Добавляем состояние для отслеживания клика по кнопке "Найти туры"

	useEffect(() => {
		localStorage.setItem('country', country)
	}, [country])

	useEffect(() => {
		localStorage.setItem('type', type)
	}, [type])

	useEffect(() => {
		localStorage.setItem('departureCity', departureCity)
	}, [departureCity])

	useEffect(() => {
		localStorage.setItem('selectedCities', JSON.stringify(selectedCities))
	}, [selectedCities])

	const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setCountry(e.target.value)
	}

	const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setType(e.target.value)
	}

	const handleDepartureCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setDepartureCity(e.target.value)
	}

	const handleCityChange = (city: string) => {
		const isSelected = selectedCities.includes(city)
		if (isSelected) {
			setSelectedCities(selectedCities.filter(c => c !== city))
		} else {
			setSelectedCities([...selectedCities, city])
		}
	}

	const handleSearchClick = () => {
		setSearchClicked(true)
		// Добавьте здесь логику для отправки запроса на сервер с выбранными фильтрами
		// Например, вызов функции для загрузки данных или навигация на страницу результатов
	}

	return (
		<div id='filtertur'>
			<div className='filter-container'>
				<h1>Фильтр туров</h1>
				<div className='filter-object'>
					<div className='filter-section'>
						<label>Страна:</label>
						<select value={country} onChange={handleCountryChange}>
							<option value=''>Выберите страну</option>
							<option value='Russia'>Россия</option>
							<option value='Spain'>Испания</option>
							<option value='Italy'>Италия</option>
							<option value='France'>Франция</option>
						</select>
					</div>
					<div className='filter-section'>
						<label>Тип отдыха:</label>
						<select value={type} onChange={handleTypeChange}>
							<option value=''>Выберите тип</option>
							<option value='Active'>Активный</option>
							<option value='Relaxing'>Расслабляющий</option>
							<option value='Educational'>Познавательный</option>
						</select>
					</div>
				</div>

				<div className='filter-section'>
					<label>Город вылета:</label>
					{cities.map(city => (
						<div key={city} className='checkbox'>
							<input
								type='checkbox'
								id={city}
								value={city}
								checked={selectedCities.includes(city)}
								onChange={() => handleCityChange(city)}
							/>
							<label htmlFor={city}>{city}</label>
						</div>
					))}
				</div>

				{/* Кнопка "Найти туры" */}
				<div className='filter-section'>
					<button onClick={handleSearchClick}>Найти туры</button>
				</div>
			</div>
		</div>
	)
}

export default Filtertur
