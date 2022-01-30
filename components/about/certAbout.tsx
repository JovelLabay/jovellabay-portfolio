import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const CertAbout = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-5">Certificates</h1>
      {/* <div className="mb-10 flex flex-wrap gap-3"> */}
      <div className="mb-10">
        {/* <div className="h-20 w-32 bg-white rounded-md flex justify-center items-center transform hover:bg-zinc-400 transition duration-2000 ease-out cursor-pointer"></div> */}
        {/* THIS IS THE TEMPLATE TO BE USE ONCE CERTIFICATION HAS BEEN RECIEVED */}
        <h1 className="text-zinc-400">
          Unable to load certificates at the moment.
        </h1>
        {/*<CircularProgress />*/}
        {/* <p className="font-light text-zinc-400">Come back soon.</p> */}
        <Box sx={{ width: "auto" }}>
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
        </Box>
      </div>
    </div>
  );
};

export default CertAbout;
