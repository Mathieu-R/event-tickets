import type HomeController from '#controllers/home_controller'
import type { InferPageProps } from '@adonisjs/inertia/types'
import { Head } from '@inertiajs/react'
import Layout from '~/app/layout'
import Card from '~/app/components/card'

export default function Home(props: InferPageProps<HomeController, 'index'>) {
    const { events } = props
    return (
        <Layout>
            <Head title="Home" />
            <div className="events-container">
                {events.data.map((event) => (
                    <Card key={event.id} event={event} />
                ))}
            </div>
        </Layout>
    )
}
