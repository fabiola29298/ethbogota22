import { chains } from "@web3modal/ethereum";
import { useContractRead } from "@web3modal/react";
import ABI from "../utils/ABI.json";
import { useAccount } from "@web3modal/react";

const contractAddress = "0xd0d9Edf148E6cbBA547939514517e82814Dc77BA";

const ContractRead = () => {
  var { address, isConnected } = useAccount();
  address = "0xe61a3def0921b2585e60fd870264990646b30b5c";

  const config = {
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: "getNFT",
    chainId: chains.polygonMumbai.id,
  };
  const { data, error, isLoading, refetch } = useContractRead(config);

  return (
    <>
      <section>
        <ul>
          <li>
            Contract read config: <span>{JSON.stringify(config)}</span>
          </li>
          <li>
            Returned data:{" "}
            <span>{isLoading ? "Loading..." : JSON.stringify(data)}</span>
          </li>
          <li>
            Error: <span>{error ? error.message : "No Error"}</span>
          </li>
        </ul>
        <button
          onClick={async () => refetch().then(console.log("Refetch")).finally()}
        >
          Refetch data
        </button>
      </section>
    </>
  );
};

export default ContractRead;
