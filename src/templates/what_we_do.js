import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageBackground from "../images/images_homenowords-02.jpg"
import { makeStyles } from "@material-ui/core"
import FlickerEffect from "../components/flickerEffect"
import { default as jsonSEO } from '../templates/configDataForSEO';

const useStyles = makeStyles(() => ({
   image: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& div': {
         backgroundImage: `url(${ImageBackground})`,
         backgroundSize: '100% auto',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'relative',
         "@media (max-width: 767px)": {
            height: '25vh',
            width: '95vw',
         },
         "@media (min-width: 768px) and (max-width: 1023px)": {
            height: '33vh',
            width: '90vw',
         },
         "@media (min-width: 1024px) and (max-width: 1280px)": {
            height: '35vw',
            width: '70vw',
         },
         "@media (min-width: 1281px) and (max-width: 1439px)": {
            height: '50vh',
            width: '50vw',
         },
         "@media (min-width: 1440px)": {
            height: '48vh',
            width: '45vw'
         },
      }
   },
   dynamicContent: {
      position: 'absolute',
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
      textTransform: 'uppercase',
      color: "white",
      padding: '5px 0',
      textAlign: 'center',
      "@media (max-width: 767px)": {
         width: '60vw',
         top: '52%',
         left: '9%'
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '47vw',
         top: '70%',
         left: '13%'
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '40vw',
         top: '69%',
         left: '8%'
      },
      "@media (min-width: 1281px) and (max-width: 1439px)": {
         width: '26vw',
         top: '64%',
         left: '12%'
      },
      "@media (min-width: 1440px)": {
         width: '26vw',
         top: '68%',
         left: '12%'
      },
   },
   configArtical: {
      textAlign: 'justify',
      marginBottom: 10,
      '& p': {
         margin: '0 0 10px',
         lineHeight: 1.42857143,
         color: '#050505'
      },
      '& p:nth-child(1)': {
         margin: '20px 0 10px',
         fontWeight: 400,
         letterSpacing: 0,
         lineHeight: '1.2em',
         color: '#000000'
      },
      '& p:nth-child(2)': {
         margin: '20px 0 10px',
         fontWeight: 400,
         letterSpacing: 0,
         lineHeight: '1.2em'
      },
      '& p:nth-child(5)': {
         margin: '20px 0 10px',
         fontWeight: 400,
         letterSpacing: 0,
         lineHeight: '1.2em'
      },
      '& ul': {
         paddingLeft: 40,
         '& li': {
            margin: 0
         }
      }
   },
}));

const listWordWhatWeDo = ['BALANCED', 'MODERNIZED', 'UNCLOUDED', 'ENJOYED', 'LIVED', 'SIMPLIFIED'];
const whatWeDo = jsonSEO.whatWeDo;

const WhatWeDo = ({ data: { post }, location }) => {
   const classes = useStyles()
   const siteTitle = post.title || `Title`

   return (
      <Layout location={location} title={siteTitle}>
         <Seo title={whatWeDo.title} description={whatWeDo.description} img={whatWeDo.image} />
         <div>
            <div className={classes.image}>
               <div>
                  <p className={classes.dynamicContent}>
                     A
                     <FlickerEffect listWord={listWordWhatWeDo}></FlickerEffect>
                     APPROACH TO TECHNOLOGY
                  </p>
               </div>
            </div>
            <article className={classes.configArtical}>
               {parse(post.content)}
            </article>
         </div>
      </Layout>
   )
}

export default WhatWeDo

export const pageQuery = graphql`
  query WhatWeDo(
    # these variables are passed in via createPage.pageContext in gatsby-node.js
    $id: String!
  ) {
    # selecting the current post by id
    post: wpPost(id: { eq: $id }) {
      id
      content
      title
      slug
      excerpt
    }
  }
`
