import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { makeStyles } from "@material-ui/core"
//import img
import ImageBackground from "../images/images_homenowords-04.jpg"
import imgDiego from "../images/diego.jpg"
import imgJenifer from "../images/jennifer.jpg"
import imgSteve from "../images/steve.jpg"
import imgKelley from "../images/kelley.jpg"
import imgVien from "../images/vien.jpg"
import imgJimena from "../images/jimena.jpg"
import imgHai from "../images/hai.jpg"
import imgHayani from "../images/jenpuppy.jpg"
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
            height: '47vh',
            width: '47vw',
         },
         "@media (min-width: 1440px)": {
            height: '48vh',
            width: '45vw'
         },
      }
   },
   configArtical: {
      textAlign: 'justify'
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
         width: '50vw',
         top: '36%',
         left: '35%'
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '37vw',
         top: '39%',
         left: '42%'
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '23vw',
         top: '43%',
         left: '40%'
      },
      "@media (min-width: 1281px) and (max-width: 1439px)": {
         width: '19vw',
         top: '44%',
         left: '44%'
      },
      "@media (min-width: 1440px)": {
         width: '23vw',
         top: '43%',
         left: '40%'
      },
   },
   listPerson: {
      display: 'flex',
      justifyContent: 'center',
      "@media (max-width: 767px)": {
         flexDirection: 'column'
      },
      '& img': {
         "@media (max-width: 767px)": {
            width: '50vw',
            top: '32%',
         },
         "@media (min-width: 768px) and (max-width: 1023px)": {
            width: '15vw',
            top: '33%',
         },
         "@media (min-width: 1024px) and (max-width: 1280px)": {
            width: '15vw',
            top: '50%',
         },
         "@media (min-width: 1281px) and (max-width: 1439px)": {
            width: '10vw',
            top: '42%',
         },
         "@media (min-width: 1440px)": {
            width: '10vw',
            top: '42%',
         },
      }
   },
   card: {
      padding: 20,
      "@media (max-width: 767px)": {
         textAlign: 'center'
      },
   },
   Name: {
      margin: 0,
   },
   Position: {
      margin: 0
   }
}));

const persons = [
   { name: "DIEGO DESPAUX", position: "Code Artist", image: imgDiego },
   { name: "JENNIFER GROSSMAN", position: "COO", image: imgJenifer },
   { name: "STEVE HONG", position: "CEO and Founder", image: imgSteve },
   { name: "KELLEY MADDOX   ", position: "Project Conductor", image: imgKelley },
]

const persons2 = [
   { name: "VIEN NGUYEN", position: "Code Artist", image: imgVien },
   { name: "JIMENA PINTOS", position: "Code Artist", image: imgJimena },
   { name: "HAI TRAN", position: "Lead Code Artist", image: imgHai },
   { name: "HAYANI", position: "Chief of Security", image: imgHayani },
];

const listWordTeam = ['SMART', 'CREATIVE', 'DIVERSE', 'FUN', 'BOLD',];

const team = jsonSEO.team;

const Team = ({ data, location }) => {
   const classes = useStyles()
   const siteTitle = data.site.siteMetadata?.title || `Title`

   return (
      <Layout location={location} title={siteTitle}>
         <Seo title={team.title} description={team.description} img={team.image} />
         <div>
            <div className={classes.image}>
               <div>
                  <p className={classes.dynamicContent}>
                     WE ARE <FlickerEffect listWord={listWordTeam}></FlickerEffect>
                  </p>
               </div>
            </div>
            <div className={classes.listPerson}>
               {persons.map((per, i) => {
                  return (
                     <div key={i}>
                        <div className={classes.card}>
                           <img src={per.image} alt={per.name}></img>
                           <p className={classes.Name}>{per.name}</p>
                           <p className={classes.Position}>{per.position}</p>
                        </div>
                     </div>)
               })}
            </div>
            <div className={classes.listPerson}>
               {persons2.map((per, i) => {
                  return (
                     <div key={i}>
                        <div className={classes.card}>
                           <img src={per.image} alt={per.name}></img>
                           <p className={classes.Name}>{per.name}</p>
                           <p className={classes.Position}>{per.position}</p>
                        </div>
                     </div>)
               })}
            </div>
         </div>
      </Layout>
   )
}

export default Team

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`