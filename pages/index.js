import Head from 'next/head';
import { Template, Panel, NotificationBanner } from 'govuk-react-jsx';

const headerProps = {
    serviceName: 'Service Name',
    serviceUrlHref: '/components/header',
    navigation: [
        {
            active: true,
            children: [
                <em key="0">Navigation item 1</em>
            ],
            href: '#1'
        },
        {
            children: [
                <em key="0">Navigation item 2</em>
            ],
            href: '#2'
        },
        {
            children: [
                <em key="0">Navigation item 3</em>
            ],
            href: '#3'
        }
    ]
};

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Template
                beforeContent={<p className="govuk-body">Before content goes here</p>}
                containerClassName="custom-container-class-name"
                footer={undefined}
                header={headerProps}
                mainClassName="custom-main-class-name"
                title="Custom title here">

                <main>
                    <NotificationBanner titleId="govuk-notification-banner-title">
                        <p className="govuk-notification-banner__heading">
                            You have 9 days to send a response.
                        </p>
                    </NotificationBanner>

                    <h1 className="govuk-heading-xl">govuk-react-jsx with Next JS</h1>
                    <h2 className="govuk-heading-l">Typography</h2>
                    <p className="govuk-body">
                        govuk-react-jsx makes direct use of{' '}
                        <a
                            className="govuk-link"
                            href="https://design-system.service.gov.uk/styles/typography/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            govuk-frontend
                        </a>{' '}
                        styles for things such as typography
                    </p>
                    <h2 className="govuk-heading-m">Medium Heading</h2>
                    <h3 className="govuk-heading-s">Small Heading</h3>
                    <p className="govuk-body-l">Large paragraph</p>
                    <p className="govuk-body">Standard paragraph</p>
                    <p className="govuk-body-s">Small paragraph</p>

                    <p className="govuk-body">
                        Use this design system to make your service consistent with GOV.UK.
                    </p>

                    <Panel titleChildren="Application complete">
                        Your reference number: HDJ2123F
                    </Panel>
                </main>

            </Template>
        </div>
    )
}
