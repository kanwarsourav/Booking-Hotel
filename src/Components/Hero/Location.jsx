
import { CiLocationOn } from 'react-icons/ci'

export default function Location() {
  return (
    <>
      <div className="location">
        <div className="location-container">
            <div>
                <CiLocationOn className='location-icon'/>
            </div>
            <div className="location-content">
                <label>Location</label>
                <input placeholder='where are you going?'/>
            </div>
        </div>
      </div>
    </>
  )
}
