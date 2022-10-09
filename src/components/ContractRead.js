import { useContractRead } from "@web3modal/react";
import ABI from "../utils/ABI.json";
import { useAccount } from "@web3modal/react";

const contractAddress = "0xd9d14F2bB315Ec2e352FF7b51925ADBd2AA2dF84";

const ContractRead = () => {
  var { address, isConnected } = useAccount();
  address = "0xe61a3def0921b2585e60fd870264990646b30b5c";

  const config = {
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: "getNFT",
  };
  const { data, error, isLoading, refetch } = useContractRead(config);

  return (
    <>
      <section>
        <ul>
          <li>
            Error: <span>{error ? error.message : "No Error"}</span>
          </li>
        </ul>
        <button onClick={async () => refetch()}>Refetch data</button>
      </section>
    </>
  );
};

export default ContractRead;
