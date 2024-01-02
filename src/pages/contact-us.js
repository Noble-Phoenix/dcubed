import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mvoeoaed");
  if (state.succeeded) {
    return <>
    <InnerPageContainer title="">
    <PageMetaTags title="Contact Us" description={"You can contact dcubed at requests@dcubed.biz , or by filling out the form located at dcubed.biz/contact-us"} url="/contact-us" />
    <div className="flex justify-center items-center w-full  min-h-screen bg-base-200 px-5 py-5">
        <div className="xl:max-w-7xl bg-base drop-shadow-xl w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
          <div className="sm:w-[60%] lg:w-[50%] hidden md:flex ">
            <img src={"https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt={"Hands with phone"} 
              className=" h-3/5 w-full rounded-xl" />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-accent">
              Submission Succesful! 
            </h1>         
            
            <div className="w-full mt-5 sm:mt-8">
              <h2 className="text-center text-xl sm:text-2xl font-semibold text-accent">Thank you for contacting us!</h2>
              <p> We read every request and  typically respond within 48 hours, if a reply is required. Our team will respond to the email address if you have indicated.
                We look forward to working with you in the future!
              </p>
              <br/>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <Link href={"/"} > 
                <button className="btn btn-active btn-secondary">
                    Return Home
                  </button>
                </Link>
                 
                  </div>
            </div>
      </div>
      </div>
      </div>
    </InnerPageContainer>
    </>;
  }
  return (
    <><InnerPageContainer title="">
          <PageMetaTags title="Contact Us" description={"You can contact dcubed at requests@dcubed.biz , or by filling out the form located at dcubed.biz/contact-us"} url="/contact-us" />

      <div className="flex justify-center items-center w-full bg-base-200 px-5 py-5">
        <div className="xl:max-w-7xl bg-base drop-shadow-xl w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
          <div className="sm:w-[60%] lg:w-[50%] hidden md:flex ">
            <img src={"https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
              alt={"Hands with phone"} 
              className=" h-3/5 w-full rounded-xl" />
          </div>
          <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
            <h1 className="text-center text-2xl sm:text-3xl font-semibold text-accent">
              Contact Us
            </h1>
            <div className="w-full mt-5 sm:mt-8">
              <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
                <form onSubmit={handleSubmit} action="https://formspree.io/f/mvoeoaed">
                <div className="flex flex-col sm:flex-row gap-4 pb-3">
                  <input
                    id="first-name"
                    type="text"
                    name="fname"
                    placeholder="Enter Your First Name"
                    className="input input-bordered input-accent w-full max-w-xs text-base-content placeholder:text-base-content/90"
                    required=""
                  />
                  <ValidationError 
                  prefix="First Name" 
                  field="name"
                  errors={state.errors}
                />
                  <input
                    id="last-name"
                    type="text"
                    name="lname"
                    placeholder="Enter Your Last Name"
                    className="input input-bordered input-accent w-full max-w-xs text-base-content placeholder:text-base-content/90"
                    required=""
                  />
                       <ValidationError 
                  prefix="Last Name" 
                  field="lname"
                  errors={state.errors}
                />
                </div>
                <div className='pb-3'>
                <input
                  id="email"
                  type="email"
                  name='email'
                  placeholder="Enter Your Email"
                  className="input input-bordered input-accent w-full text-base-content placeholder:text-base-content/90"
                  required=""
                />
                  <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                </div>
                <div className='pb-3'>
                <input
                  id="phone-number"
                  type="tel"
                  name="phone-number"
                  placeholder="Enter Your Phone No"
                  className="input input-bordered input-accent w-full text-base-content placeholder:text-base-content/90"
                />
                  <ValidationError 
                  prefix="Phone Number" 
                  field="phone-number"
                  errors={state.errors}
                />
                </div>
                <div className='pb-5'>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message Here. Please include any specific services you would like more information about."
                  className="textarea textarea-bordered textarea-accent w-full text-base-content plachold:text-base-content/90"
                  required="" >

                </textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                </div>
                


                <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                  <button className="btn btn-active btn-secondary btn-block max-w-[200px]"
                  type="submit" disabled={state.submitting}>
                    Submit
                  </button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </InnerPageContainer>

    </>

  );
}