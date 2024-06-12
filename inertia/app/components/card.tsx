import { Link } from '@inertiajs/react'
import { formatDate, formatTime } from '~/app/utils/date_utils'

// @ts-ignore
export default function Card({ event }) {
    return (
        <div className="card">
            <div className="card__poster_container">
                <img
                    className="card__poster-img"
                    src={`resources/assets/posters/${event.posterUrl}`}
                    alt={event.name}
                />
            </div>
            <div className="card__infos_container">
                <div className="card__title">{event.title}</div>
                <div className="card__owner">{event.owner.name}</div>
                <div className="card__schedule-container">
                    <div className="card__schedule-date">{formatDate(event.startingAt)}</div>-
                    <div className="card__schedule-time-container">
                        <div className="card__schedule-time_start">
                            {formatTime(event.startingAt)}
                        </div>
                        {event.endingAt && (
                            <div className="card__schedule-time_end">
                                {formatTime(event.endingAt)}
                            </div>
                        )}
                    </div>
                </div>
                <div className="card__venue-container">
                    <div className="card__venue">{event.venue.name}</div>
                </div>
                <div className="card__button_container">
                    <Link href={`/event/${event.id}`} className="card__button">
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}
