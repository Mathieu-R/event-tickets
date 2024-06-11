import { Head, Link } from "@inertiajs/react";
import type EventController from "#controllers/event_controller";
import type { InferPageProps } from "@adonisjs/inertia/types";
import { formatDate, formatTime } from "~/app/utils/date_utils";
import Layout from "~/app/layout";

//import PlaceMarkerSVG from "../../resources/assets/svg/place-marker.svg";
//import CalendarSVG from "../../resources/assets/svg/calendar.svg";
//import TicketSVG from "../../resources/assets/svg/ticket.svg";

export default function EventPage(props: InferPageProps<EventController, "index">) {
	const { event } = props;
	console.log(event);

	return (
		<Layout>
			<Head title={event.title} />
		<div className="event-container flex-1">
			<div className="event__infos">
				<div className="event__cover-container">
					<img src={`resources/assets/posters/${event.posterUrl}`} alt={event.name} />
				</div>
				<div>
					<div>{event.title}</div>

					<div>
						<div>{formatDate(event.startingAt!)}</div>
						|
						<div>{formatTime(event.startingAt!)}</div>
						{event.endingAt && <div>{formatTime(event.endingAt)}</div>}
						<div>{event.venue.name}</div>
						<div>{event.venue.address}</div>
					</div>

					<div>
						<div>{event.tickets[0].price}</div>
						{event.tickets.length > 0 && <div>{event.tickets[event.tickets.length - 1].price}</div>}
					</div>

					<div>
						<h4>About</h4>
						<p>{event.description}</p>
					</div>

					<div>
						MAP
					</div>
				</div>

			</div>
			<div className="event__checkout">
				<form>
					<label htmlFor="firstname">Firstname</label>
					<input type="text" name="firstname" id="firstname" />
					<label htmlFor="lastname">Lastname</label>
					<input type="text" name="lastname" id="lastname" />
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" />
				</form>
			</div>
		</div>
		</Layout>
	);
}
