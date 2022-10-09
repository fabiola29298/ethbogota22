import { chains } from "@web3modal/ethereum";
import { useWaitForTransaction, useContractWrite } from "@web3modal/react";
import ABI from "../utils/ABI.json";
import { useAccount } from "@web3modal/react";

const contractAddress = "0xd9d14F2bB315Ec2e352FF7b51925ADBd2AA2dF84";

const Write = () => {
  const { address, isConnected } = useAccount();
  let name = "Laura-Velez";

  const config = {
    addressOrName: contractAddress,
    contractInterface: ABI,
    functionName: "mint",
    chainId: chains.polygonMumbai.id,
    args: [
      name,
      {
        gasLimit: "0x52080",
      },
    ],
    gasLimit: "0x52080",
  };

  const { data, error, isLoading, write } = useContractWrite(config);

  const { receipt, isWaiting } = useWaitForTransaction({ hash: data?.hash });

  return (
    <>
      {/* esta información no se muestra, solo es necesario la confirmación de la transacción */}
      <section>
        <ul>
          <li>
            Error: <span>{error ? error.message : "No Error"}</span>
            <span>{isWaiting ? "Waiting..." : JSON.stringify(receipt)}</span>
          </li>
        </ul>
        <button onClick={async () => write()}>Send Transaction</button>
      </section>
      <br></br>
      <br></br>
    </>
  );
};

export default Write;
