import { Head, Link } from '@inertiajs/react'
import type EventController from '#controllers/event_controller'
import type { InferPageProps } from '@adonisjs/inertia/types'
import { formatDate, formatTime } from '~/app/utils/date_utils'
import Layout from '~/app/layout'

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet'
import { Popup } from 'react-leaflet'

//import PlaceMarkerSVG from "../../resources/assets/svg/place-marker.svg";
//import CalendarSVG from "../../resources/assets/svg/calendar.svg";
//import TicketSVG from "../../resources/assets/svg/ticket.svg";

export default function EventPage(props: InferPageProps<EventController, 'index'>) {
    const { event } = props
    console.log(event)

    return (
        <Layout>
            <Head title={event.title} />
            <div className="event-container">
                <div className="event__infos">
                    <img
                        className="event__infos__poster"
                        src={`http://localhost:3333/resources/assets/posters/${event.posterUrl}`}
                        alt={event.title}
                    />

                    <div className="event__infos__header">
                        <div className="event__infos__header-details">
                            <div className="event__infos__header-title">{event.title}</div>
                            <div className="event__infos__header-owner">{event.owner.name}</div>
                            <div className="event__infos__header-time-container">
                                <div className="event__infos__header-starting_date">
                                    {formatDate(event.startingAt!)}
                                </div>
                                <div className="event__infos__header-starting_time">
                                    {formatTime(event.startingAt!)}
                                </div>
                                {event.endingAt && (
                                    <div className="event__infos__header-starting_time">
                                        {formatTime(event.endingAt)}
                                    </div>
                                )}
                            </div>
                            <div className="event__infos__header-venue-container">
                                <div className="event__infos__header-venue-name">
                                    {event.venue.name}
                                </div>
                                <div className="event__header__cover-venue-address">
                                    {event.venue.address}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="event__infos__description">
                        <div className="event__infos__description-column1">
                            <div className="event__infos__description-category">
                                {event.category}
                            </div>
                            <div className="event__infos__description-tickets">
                                <div className="event__infos__description-ticket_lower_range">
                                    {event.tickets[0].price}
                                </div>
                                {event.tickets.length > 0 && (
                                    <div className="event__infos__description-ticket_upper_range">
                                        {event.tickets[event.tickets.length - 1].price}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="event__infos__description__column2">
                            <h4>About</h4>
                            <p className="event__infos__description-about">{event.description}</p>
                        </div>
                    </div>

                    <div className="event__infos__map">
                        <MapContainer
                            center={[event.venue.lat!, event.venue.lng!]}
                            zoom={13}
                            scrollWheelZoom={false}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[event.venue.lat!, event.venue.lng!]}>
                                <Popup>
                                    {event.venue.name} <br /> {event.venue.address}
                                </Popup>
                            </Marker>
                        </MapContainer>
                        ,
                    </div>
                </div>
                <div className="event__checkout">
                    <h2 className="event__checkout__title">Checkout</h2>
                    <form>
                        <div className="input_group">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" name="firstname" id="firstname" placeholder="John" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="lastname">Lastname</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Doe" />
                        </div>
                        <div className="input_group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john@doe.com"
                            />
                        </div>
                        <hr />
                        <h3 className="event__checkout_tickets-title">Choose your ticket(s)</h3>
                        {event.tickets.map((ticket) => (
                            <div className="input_group">
                                <label htmlFor={ticket.name}>
                                    {ticket.name} ({ticket.price} €)
                                </label>
                                {ticket.description && <p>{ticket.description}</p>}
                                <select name={ticket.name} id={ticket.name}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        ))}
                        <button type="submit" className="button">
                            Checkout
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}
