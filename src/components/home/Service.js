


import Banknotes from '@heroicons/react/24/solid/BanknotesIcon'
import CalculatorIcon from '@heroicons/react/24/solid/CalculatorIcon'
import BriefcaseIcon from '@heroicons/react/24/solid/BriefcaseIcon'
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon'
import DocumentIcon from '@heroicons/react/24/solid/DocumentIcon'
import CardContainer from '../common/CardContainer'

const generationStepData = [
    {icon : <Banknotes className='w-10 h-10 inline-block mr-2' />, title: "Personal Tax Preperation", description : "dcubed offers Federal, State and City returns as well as E-file with direct deposit at no additional charge. "},
    {icon : <Banknotes className='w-10 h-10 inline-block mr-2' />, title: "Corporate Tax Preperation", description : "dcubed offers Federal, State and City returns as applicable for Corporations, LLCs and Partnerships"},
    {icon : <BriefcaseIcon className='w-10 h-10 inline-block mr-2' />, title: "New Business Filing", description : "Creating your own business is exciting. However, after the excitement fades away is when you see if your business has what it takes to last. It’ll be up to you to make that “exciting” feeling last forever."},
    {icon : <CurrencyDollarIcon className='w-10 h-10 inline-block mr-2' />, title: "Payroll Processing", description : "If you’re just starting out, you may only have a few employees to worry about. You might be able to handle payroll on your own, but wouldn’t your time be better spent on developing new products or services for your business?  "},
    {icon : <DocumentIcon className='w-10 h-10 inline-block mr-2' />, title: "Financial Statement Preperation", description : "As a small business owner you have more important things to do than to keep your own books. We take care of your books for you, so you can get back to the job of running your business and generating profits."},
    {icon : <CalculatorIcon className='w-10 h-10 inline-block mr-2' />, title: "Bookkeeping", description : "Accurate bookkeeping is essential to your company's long-term viability. Experienced, affordable, and reliable, we serve a variety of industries and clients."},

]

// const featuresData = [
//     {title : "Expertise", description : "We have team of experienced software developers who are skilled in various programming languages, software development methodologies, and tools."},
//     {title : "Custom software", description : "We develop custom software solutions based on the specific needs of its clients."},
//     {title : "Maintenance & Support:", description : "We offer ongoing application maintenance and support services to its clients. This might include bug fixes, software updates, and technical support."},
//     {title : "Quality assurance and testing", description : "A team of QA professionals who are responsible for ensuring that the software developed meets the highest quality standards. "},
//     {title : "Agile development methodologies", description : "We use Agile development methodologies such as Scrum or Kanban to manage their software development projects. This allows for greater collaboration and flexibility throughout the development process."},
//     {title : "Data security and privacy", description : "A strong focus on data security and privacy, and should implement appropriate measures to protect client data and ensure compliance with relevant regulations such as GDPR or CCPA."},
// ]

function ServiceOfferings(){
    return(
        <>
            <CardContainer 
                heading={"Service Offerings"}
                data= {generationStepData}/>
        </>
    )
}

export default ServiceOfferings