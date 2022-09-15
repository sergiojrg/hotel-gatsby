import React from "react"
// import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title }) => {
//   const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title,
    description: "Practicando con Gatsby",
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      
    </>
  )
}