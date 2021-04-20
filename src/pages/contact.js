import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ImageBackground from "../images/images_homenowords-07.jpg"
import { makeStyles, TextareaAutosize, TextField } from "@material-ui/core"
import FlickerEffect from "../components/flickerEffect"
import { useForm } from 'react-hook-form';
import { default as jsonSEO } from '../templates/configDataForSEO';
import clsx from 'clsx'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';

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
      top: '42%',
      "@media (max-width: 767px)": {
         width: '50vw',
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '40vw',
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '40vw',
      },
      "@media (min-width: 1281px) and (max-width: 1439px)": {
         width: '30vw',
      },
      "@media (min-width: 1440px)": {
         width: '23vw',
      },
   },
   contactView: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '55vw',
      marginTop: 25,
      "@media (max-width: 767px)": {
         flexDirection: 'column-reverse'
      },
      "@media (min-width: 768px) and (max-width: 1023px)": {
         width: '85vw',
         top: '33%',
      },
      "@media (min-width: 1024px) and (max-width: 1280px)": {
         width: '80vw',
         top: '50%',
      },
      '& div:nth-child(2)': {
         width: '35vw',
         "@media (max-width: 767px)": {
            width: '90vw'
         },
         "@media (min-width: 768px) and (max-width: 1023px)": {
            width: '55vw',
            top: '33%',
         },
         "@media (min-width: 1024px) and (max-width: 1280px)": {
            width: '55vw',
         },
      },

   },
   label: {
      margin: 0,
      fontSize: '0.8rem',
      display: 'block'
   },
   subLabel: {
      margin: 0,
      fontSize: '0.8rem'
   },
   field: {
      margin: '20px 0',
      width: '100%'
   },
   nameField: {
      display: 'flex',
      '& div:nth-child(1)': {
         marginRight: '2%',
         width: '100%'
      },
      '& div:nth-child(2)': {
         width: '100%'
      }
   },
   width100percent: {
      width: '100%',
      backgroundColor:'#fafafa',
      '& :hover':{
         backgroundColor:'white'
      }, 
      '& .MuiOutlinedInput-input': {
         padding: 6,
         fontFamily: 'AvenirNext',
         color:'#555'
      },
      '& .MuiOutlinedInput-root': {
         borderRadius:2
      },
   },
   width100percentRed: {
      width: '100%',
      backgroundColor:'#fafafa',
      '& :hover':{
         backgroundColor:'white'
      }, 
      '& .MuiOutlinedInput-root': {
         borderRadius:2
      },
      '& .MuiOutlinedInput-input': {
         padding: 6,
         fontFamily: 'AvenirNext',
         color:'#555'
      },
      '& .MuiInputBase-root': {
         '& fieldset': {
            borderColor: 'red',
            borderRadius:1
         },
      }
   },
   textArea: {
      padding: 6,
      border: '1px solid rgba(0, 0, 0, 0.23);',
      width: '100%',
      borderRadius: 2,
      '&:focus': {
         border: '2px solid #005b99',
         outline: 0,
      },
      backgroundColor:'#fafafa',
      '& :hover':{
         backgroundColor:'white'
      }, 
   },
   textAreaRed: {
      padding: 6,
      border: '1px solid red;',
      width: '100%',
      borderRadius: 2,
      '&:focus': {
         border: '1px solid red',
         outline: 0,
      },
      backgroundColor:'#fafafa',
      '& :hover':{
         backgroundColor:'white'
      }, 
   },
   contactUs: {

      '& p:nth-child(1)': {
         fontSize: '1.2rem',
         fontWeight: 'bold',
         marginBottom: 10
      },
      '& p:nth-child(2)': {
         margin: 0
      },
      '& p:nth-child(3)': {
         margin: 0
      }
   },
   wrapAll: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      "@media (max-width: 767px)": {
         alignItems: 'flex-start',
      },
   },
   button: {
      padding: '6px 12px',
      border: 0,
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold',
      textDecoration: 'underline',
      textTransform: 'uppercase',
   },
   errorsMes: {
      color: 'red',
      fontSize: '0.8rem',
      fontStyle: 'italic'
   },
   buttonSubmit: {
      textAlign: 'left',
      marginBottom: 25
   },
   submitSuccess: {
      width: '100%',
      backgroundColor: 'green',
      color: 'white',
      padding: '4px 12px',
      borderRadius: 4
   },
   submitErro: {
      width: '100%',
      backgroundColor: '#cc0e00',
      color: 'white',
      padding: '4px 12px',
      borderRadius: 4
   },
   icon: {
      fontSize: '1rem'
   }
}));

const listWordContact = ['NEED HELP', 'NEED ADVICE', 'HAVE QUESTIONS'];

const contactSEO = jsonSEO.contact;

const Contact = ({ data, location }) => {
   const classes = useStyles()
   const siteTitle = data.site.siteMetadata?.title || `Title`
   const { register, handleSubmit, errors, reset } = useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
   });
   const onSubmit = (data) => {

      console.log(data);
      if (true) {
         setSubmitSuccess(true);
         setSubmited(true);
         reset();
      } else {
         setSubmitSuccess(false)
      }

   }
   const [submitSuccess, setSubmitSuccess] = React.useState(false);
   const [submited, setSubmited] = React.useState(false)

   return (
      <Layout location={location} title={siteTitle}>
         <Seo title={contactSEO.title} description={contactSEO.description} img={contactSEO.image} />
         <div className={classes.wrapAll}>
            <div className={classes.image}>
               <div>
                  <p className={classes.dynamicContent}>
                     <FlickerEffect listWord={listWordContact}></FlickerEffect>
                  </p>
               </div>
            </div>
            <div className={classes.contactView}>
               <div className={classes.contactUs}>
                  <p>Contact Us</p>
                  <p>info@izundo.com</p>
                  <p>(415) 699-0381</p>
               </div>
               <div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <div>
                        <p className={classes.label}>Name</p>
                        <div className={classes.nameField}>
                           <div>
                              <TextField
                                 variant="outlined"
                                 className={clsx({
                                    [classes.width100percent]: !errors.firstName,
                                    [classes.width100percentRed]: errors.firstName,
                                 })}
                                 name="firstName"
                                 inputRef={register({ required: true })}
                                 color={errors.firstName ? "secondary" : "primary"}
                              />
                              <p className={classes.subLabel}>First Name</p>
                              {errors.firstName && <span className={classes.errorsMes}>*First name is required.</span>}
                           </div>
                           <div>
                              <TextField
                                 variant="outlined"
                                 className={clsx({
                                    [classes.width100percent]: !errors.lastName,
                                    [classes.width100percentRed]: errors.lastName,
                                 })}
                                 name="lastName"
                                 inputRef={register({ required: true })}
                                 color={errors.lastName ? "secondary" : "primary"}
                              />
                              <p className={classes.subLabel}>Last Name</p>
                              {errors.lastName && <span className={classes.errorsMes}>*Last name is required.</span>}
                           </div>
                        </div>
                     </div>
                     <div className={classes.field}>
                        <p className={classes.label}>Company</p>
                        <TextField variant="outlined" className={classes.width100percent} name="company" inputRef={register} />
                     </div>
                     <div className={classes.field}>
                        <p className={classes.label}>Email Address</p>
                        <TextField
                           variant="outlined"
                           className={clsx({
                              [classes.width100percent]: !errors.email,
                              [classes.width100percentRed]: errors.email,
                           })}
                           name="email"
                           color={errors.email ? "secondary" : "primary"}
                           inputRef={register({
                              required: true,
                              pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                           })} />
                        {errors.email && <span className={classes.errorsMes}>*Please format email correctly.</span>}
                     </div>
                     <div className={classes.field}>
                        <p className={classes.label}>Message</p>
                        <TextareaAutosize aria-label="empty textarea" rowsMin={5} name="message" ref={register({ required: true })} 
                        className={clsx({
                           [classes.textArea]: !errors.message,
                           [classes.textAreaRed]: errors.message,
                        })}/>
                        {errors.message && <span className={classes.errorsMes}>*Message is required.</span>}
                     </div>
                     {submited && <div>
                        {submitSuccess && <p className={classes.submitSuccess}><CheckRoundedIcon className={classes.icon} /> Submitted successfully!.</p>}
                        {!submitSuccess && <p className={classes.submitErro}><CloseRoundedIcon className={classes.icon} /> Your form has encountered a problem. Please scroll down to review.</p>}
                     </div>}
                     <div className={classes.buttonSubmit}>
                        <input type='submit' className={classes.button}></input>
                     </div>

                  </form>
               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Contact

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
