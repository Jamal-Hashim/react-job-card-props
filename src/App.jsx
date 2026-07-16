import Card from "./components/Card"

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      companyName: "Google",
      datePosted: "2 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$58/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/meta.svg",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
      companyName: "Amazon",
      datePosted: "1 week ago",
      post: "Software Development Engineer I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/apple.svg",
      companyName: "Apple",
      datePosted: "3 days ago",
      post: "iOS Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$82/hr",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/netflix.svg",
      companyName: "Netflix",
      datePosted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPZEN2r056LDjjb6IT5qShwFPl4uJy1-BAgP0hGMmiqQ&s=10",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobe.svg",
      companyName: "Adobe",
      datePosted: "10 days ago",
      post: "UI/UX Engineer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/nvidia.svg",
      companyName: "NVIDIA",
      datePosted: "4 weeks ago",
      post: "AI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$88/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
      companyName: "OpenAI",
      datePosted: "3 weeks ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "San Francisco, USA"
    },
    {
      brandLogo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tesla.svg",
      companyName: "Tesla",
      datePosted: "8 days ago",
      post: "Embedded Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$72/hr",
      location: "Austin, USA"
    }
  ];

  return (
    <>

      <div className="parent">

        {jobOpenings.map(function (elem, idx) {

          return <div key={idx}>

            <Card logo={elem.brandLogo} company={elem.companyName} posted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
        })}

      </div>

    </>
  )
}

export default App