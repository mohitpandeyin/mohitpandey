import Page from './[slug]/page'

// Home page is using the same template as other pages but with "index" as the slug
export default async function HomePage() {
  // Pass the expected params structure to match the Page component's requirements
  return <Page params={{ slug: 'index' }} />
}
