import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const CertAbout = () => {
  const CERTIFICATES = [
    { title: "Web Development 2018", school: "Udemy" },
    { title: "JavaScript", school: "Udemy" },
    { title: "Understanding NodeJS", school: "Codedamn" },
    { title: "Advanced NodeJS", school: "Codedamn" },
    { title: "MongoDB", school: "Udemy" },
    { title: "Firebase", school: "Udemy" },
    { title: "Modern Web Development", school: "Udemy" },
    { title: "Expo", school: "Mosh" },
    { title: "UX Designing", school: "Coursera" },
    { title: "PHP", school: "Udemy" },
    { title: "FreeCodeCamp", school: "Coming Soon" },
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
                className={
                  index != 10
                    ? "bg-white h-28 w-64 m-2 rounded-xl flex items-center px-3"
                    : "bg-white blur-sm h-28 w-64 m-2 rounded-xl flex items-center px-3"
                }
              >
                <div>
                  <h1 className="text-black ">{cert.title}</h1>
                  <p className="text-zinc-600 text-base">{cert.school}</p>
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
