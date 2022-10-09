import { chains } from "@web3modal/ethereum";
import { useWaitForTransaction, useContractWrite } from "@web3modal/react";
import ABI from "../utils/ABI.json";
import { useAccount } from "@web3modal/react";

const contractAddress = "0xd0d9Edf148E6cbBA547939514517e82814Dc77BA";

const CallContract = () => {
  var { address, isConnected } = useAccount();
  address = "0xe61a3def0921b2585e60fd870264990646b30b5c";
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
        <h1>useSendTransaction / useWaitForTransaction</h1>
        <p>
          Note: This example uses avalance fuji testnet, you will need some
          testnet avax from the faucet
          <a
            href="https://faucet.avax.network/"
            target="_blank"
            rel="noopener noreferer"
          >
            https://faucet.avax.network/
          </a>
        </p>
        <ul>
          <li>
            Request: <span>{JSON.stringify(config)}</span>
          </li>
          <li>
            Send Data:{" "}
            <span>{isLoading ? "Loading..." : JSON.stringify(data)}</span>
          </li>
          <li>
            Receipt Data:{" "}
            <span>{isWaiting ? "Waiting..." : JSON.stringify(receipt)}</span>
          </li>
          <li>
            Error: <span>{error ? error.message : "No Error"}</span>
          </li>
        </ul>
        <button onClick={async () => write()}>Send Transaction</button>
      </section>
    </>
  );
};

export default CallContract;
