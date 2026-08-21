import AppRoutes from './routes/AppRoutes'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <>
      <Helmet>
        <meta
          name='description'
          content='GerarNest is an official Orvibo partner and distributor providing smart home products and solutions in Nigeria.'
        />

        <meta
          name='keywords'
          content='GerarNest, Orvibo Nigeria, smart home Nigeria, smart home products, smart switches, smart lighting, smart security'
        />

        <meta name='author' content='GerarNest' />

        <meta name='robots' content='index, follow' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <script type='application/ld+json'>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'GerarNest',
            description:
              'GerarNest is an official Orvibo partner and distributor providing smart home products and solutions in Nigeria.',
            url: 'https://gerarnest.vercel.app',
            logo: 'https://gerarnest.vercel.app/favicon-32x32.png'
          })}
        </script>
      </Helmet>
      <AppRoutes />
    </>
  )
}

export default App