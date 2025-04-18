import { InfiniteLoader } from "../icons/general";
import useAxios from "@/src/hooks/use-axios";
import { IQuote } from "@/src/interfaces";
import QuoteApis from "@/src/api/resources/quotes";

const Footer = () => {
  const { response, loading } = useAxios<IQuote>({
    method: "get",
    url: QuoteApis.getRandomQuote(),
  });

  return (
    <footer className="flex flex-col items-center gap-4 fixed bottom-0 w-full px-8 justify-between py-3 border-t-1 border-t-lighy-grey border-solid bg-white">
      {loading && <InfiniteLoader />}
      {response && !loading && (
        <>
          <p className="font-poppins text-dark-grey text-sm text-center truncate w-4/5">
            {response.quote}
          </p>
          <p className="font-poppins text-dark-grey text-sm">
            - {response.author}
          </p>
        </>
      )}
    </footer>
  );
};

export default Footer;
