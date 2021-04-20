import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageBackground from "../images/images_homenowords-05.jpg"
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
            width: '90vw',
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
         top: '45%',
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '40vw',
         top: '54%',
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '40vw',
         top: '50%',
      },
      "@media (min-width: 1281px) and (max-width: 1439px)": {
         width: '30vw',
         top: '50%',
      },
      "@media (min-width: 1440px)": {
         width: '23vw',
         top: '55%',
      },
   },
   configArtical: {
      textAlign: 'justify',
      marginBottom: 10,
      '& p': {
         margin: '0 0 10px',
         lineHeight: 1.42857143
      },
      '& p:nth-child(1)': {
         margin: '20px 0 10px',
         fontWeight: 400,
         letterSpacing: 0,
         lineHeight: '1.2em',
         color: '#000000'
      }
   },
}));

const listWordHowWeWork = ['RESPONSIBILITY', 'GIVE BACK TO COMMUNITY', 'GROWTH MINDSET', 'EMPATHY', 'AGILITY', 'WORK/LIFE BALANCE',
   'FAMILY', 'LEARNING', 'CREATIVITY', 'RESPECT', 'HONESTY', 'EXCELLENCE', 'COMPASSION'];
const howWeWorkSEO = jsonSEO.howWeWork;

const HowWeWork = ({ data: { post }, location }) => {
   const classes = useStyles()
   const siteTitle = post.title || `Title`

   return (
      <Layout location={location} title={siteTitle}>
         <Seo title={howWeWorkSEO.title} description={howWeWorkSEO.description} img={howWeWorkSEO.image} />
         <div>
            <div className={classes.image}>
               <div>
                  <p className={classes.dynamicContent}>
                     <FlickerEffect listWord={listWordHowWeWork}></FlickerEffect>
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

export default HowWeWork

export const pageQuery = graphql`
  query HowWeWork(
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
