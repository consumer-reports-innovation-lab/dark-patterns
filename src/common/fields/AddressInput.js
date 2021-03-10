import React, { useState } from 'react'
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import Label from './label'
import GoogleMap from '../ui/maps/Map'
import Marker from '../ui/maps/Marker'
import DEFAULT_LOCATION from '../constants/locations'

const AddressInput = ({
  className,
  hint,
  label,
  placeholder,
  required,
  field,
  locationField = 'location',
  onChange,
  onSelect,
  form: { errors, touched, setFieldValue, values }
}) => {
  const status = touched[field.name] && errors[field.name] ? `is-invalid` : ``
  const [state, setState] = useState({
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null
  })
  const [places] = useState([])
  const [mapLocation, setMapLocation] = useState([])

  const {
    // mapApiLoaded,
    mapInstance
    // mapApi
  } = state

  function apiHasLoaded(map, maps) {
    setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps
    })
  }

  function updateMap(place) {
    if (!place.geometry) return
    if (place.geometry.viewport) {
      mapInstance.fitBounds(place.geometry.viewport)
    } else {
      mapInstance.setCenter(place.geometry.location)
      mapInstance.setZoom(15)
    }
    setMapLocation(place)
  }

  return (
    <>
      <div className={`form-group ${className}`}>
        <Label label={label} hint={hint} />
        <PlacesAutocomplete
          value={field.value || ''}
          onChange={onChange}
          onSelect={address => {
            geocodeByAddress(address).then(results => {
              const location = {
                address_components: results[0].address_components,
                formatted_address: results[0].formatted_address,
                place_id: results[0].place_id,
                marker: {
                  _lat: results[0].geometry.location.lat(),
                  _lng: results[0].geometry.location.lng()
                }
              }
              setFieldValue(locationField, location)
              updateMap(results[0])
            })
            setFieldValue(field.name, address)
          }}>
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <>
              <input
                {...getInputProps({
                  placeholder: placeholder,
                  className: `form-control ${status}`,
                  required: required
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </PlacesAutocomplete>

        {touched[field.name] && errors[field.name] && <div className="invalid-feedback">{errors[field.name]}</div>}
      </div>

      <div className="bg-dark text-white p-5">
        <div className="row">
          <div className="col-12">
            <small className="d-none">{JSON.stringify(mapLocation, null, 2)}</small>
            <GoogleMap
              defaultZoom={10}
              defaultCenter={DEFAULT_LOCATION}
              bootstrapURLKeys={{
                key: process.env.REACT_APP_MAP_KEY,
                libraries: ['places', 'geometry']
              }}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}>
              {places &&
                places.map(place => (
                  <Marker key={place.place_id} text={values.name} lat={place.marker._lat} lng={place.marker._lng} />
                ))}
            </GoogleMap>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddressInput
