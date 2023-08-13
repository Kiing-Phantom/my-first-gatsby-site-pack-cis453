import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>As of the creation of this site, I am still a student at ECPI University learning about Software Development.
                I will graduate soon, and will hopefully be able to find a career within my fireld and be on my way to work up experience.
            </p>
        </Layout>
    )
}

export const Head = () => <Seo title="About Me" />

export default AboutPage