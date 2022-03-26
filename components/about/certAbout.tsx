import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const CertAbout = () => {
  const CERTIFICATES = [
    { title: "Web Development 2018", school: "Udemy.com" },
    { title: "Responsive Web Design", school: "FreeCodeCamp.Org" },
    {
      title: "JavaScript Algorithms and Data Structures",
      school: "FreeCodeCamp.Org",
    },
    {
      title: "TypeScript Crash",
      school: "Net Ninja",
    },
    { title: "Front End Development Libraries", school: "FreeCodeCamp.Org" },
    { title: "Backend End Development and API", school: "FreeCodeCamp.Org" },
    { title: "Hybrid Mobile Development", school: "Net Ninja" },
    { title: "UX & UI Designing and Prototyping", school: "Udemy.com" },
    { title: "Databases and Cloud Platforms", school: "Unknown Data..." },
    { title: "NodeJS and NodeJS Advanced", school: "Codedamn.com" },
    { title: "Swift | iOS Development", school: "Coming soon..." },
    { title: "SwiftUI & Xcode", school: "Coming soon..." },
    { title: "Web Security", school: "Coming soon..." },
  ];
  return (
    <div>
      <h1 className="text-5xl font-bold my-5">Certificates</h1>
      {/* <div className="mb-10 flex flex-wrap gap-3"> */}
      <div className="mb-10">
        {/* <div className="h-20 w-32 bg-white rounded-md flex justify-center items-center transform hover:bg-zinc-400 transition duration-2000 ease-out cursor-pointer"></div> */}
        {/* THIS IS THE TEMPLATE TO BE USE ONCE CERTIFICATION HAS BEEN RECIEVED */}
        {/* <h1 className="text-zinc-400">
          Unable to load certificates at the moment.
        </h1> */}
        {/*<CircularProgress />*/}
        {/* <p className="font-light text-zinc-400">Come back soon.</p> */}
        {/* <Box sx={{ width: "auto" }}>
          <Skeleton
            variant="text"
            sx={{ backgroundColor: "white", height: 60 }}
            className="my-4"
          />
          <Skeleton
            variant="text"
            sx={{ backgroundColor: "white", height: 40 }}
            className="my-4"
          />
          <Skeleton
            variant="text"
            sx={{ backgroundColor: "white", height: 20 }}
            className="my-4"
          />
        </Box> */}
        <div className="flex flex-wrap">
          {CERTIFICATES.map((cert, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100 h-28 w-64 m-2 rounded-xl flex items-center px-3 transform hover:bg-zinc-400 transition duration-2000 ease-out hover:scale-90"
                // {
                //   index != 10
                //     ? "bg-white h-28 w-64 m-2 rounded-xl flex items-center px-3"
                //     : "bg-white blur-sm h-28 w-64 m-2 rounded-xl flex items-center px-3"
                // }
              >
                <div>
                  <h1 className="text-black text-base">{cert.title}</h1>
                  <p className="text-zinc-600 text-sm font-bold">
                    {cert.school}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CertAbout;
