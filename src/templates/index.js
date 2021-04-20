import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { makeStyles } from "@material-ui/core"
//import img
import ImageBackground from "../images/images_homenowords-01.jpg"
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
         width: '52vw',
         top: '56%',
         left: '22%'
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '20vw',
         top: '70%',
         left: '38%'
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '17vw',
         top: '70%',
         left: '36%'
      },
      "@media (min-width: 1281px) and (max-width: 1439px)": {
         width: '11vw',
         top: '68%',
         left: '37%'
      },
      "@media (min-width: 1440px)": {
         width: '11vw',
         top: '68%',
         left: '37%'
      },
   },
   listPerson: {
      display: 'flex',
      justifyContent: 'center',
      "@media (max-width: 767px)": {
         flexDirection: 'column'
      },
      '& article': {
         "@media (max-width: 767px)": {
         },
         "@media (min-width: 768px) and (max-width: 1023px)": {
            padding: 10,
         },
         "@media (min-width: 1024px) and (max-width: 1280px)": {
            padding: 20,
         },
         "@media (min-width: 1281px) and (max-width: 1439px)": {
            padding: 20,
         },
         "@media (min-width: 1440px)": {
            padding: 20,
         },
         '& p:nth-child(1)': {
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginBottom: '0.5rem'
         },
         '& p:nth-child(2)': {
            marginBottom: '0.5rem'
         },
         '& p:nth-child(3)': {
            textAlign: 'right',
            marginBottom: 10,
            '& a': {
               color: 'black',
            }
         }
      },
      '& div': {
         padding: '20px 20px 0px',
         textAlign: 'justify',
         margin: 0,
         '& p:nth-child(1)':{
            '& strong': {
               fontSize: 24,
               marginBottom: 16,
               display:'block'
            },
            marginBottom:10,
            '& a': {
               color: 'black',
               textDecoration:'underline',
               textAlign:'right',
               display:'block',
               marginTop:10
            }
         },
         '& p:nth-child(2)':{
            textAlign:'right',
            '& a': {
               color: 'black',
               textDecoration:'underline'
            }
         }
         
      }
   },
   Name: {
      margin: 0,
      fontWeight: 'bold',
   },
   Position: {
      margin: 0
   }
}));

const listWordHome = ['ENJOYED', 'LIVED', 'SIMPLIFIED', 'BALANCED', 'MODERNIZED', 'UNCLOUDED'];

const homeSEO = jsonSEO.home;

const BlogIndex = ({ data: { post }, location }) => {console.log(post)
   console.log(post)
   const classes = useStyles()
   const siteTitle = post.title || `Title`;

   const stripHtml = (html) => {
      var temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      return temporalDivElement.textContent || temporalDivElement.innerText || "";
   };

   const artic = post.content.split('</p>');


   return (
      <Layout location={location} title={siteTitle}>
         <Seo title={homeSEO.title} img={homeSEO.image} description={homeSEO.description} />
         <div>
            <div className={classes.image}>
               <div>
                  <p className={classes.dynamicContent}>
                     <span>LIFE:</span> <FlickerEffect listWord={listWordHome}></FlickerEffect>
                  </p>
               </div>
            </div>
            <div className={classes.listPerson}>
               {artic.map((atc, i) => {
                  if (stripHtml(atc.trim()).length > 0) {
                     return (
                        <div key={i}>
                           {parse(atc)}
                        </div>
                     )
                  } else return (<></>)
               })}
            </div>
         </div>
      </Layout>
   )
}

export default BlogIndex

export const pageQuery = graphql`
  query index(
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