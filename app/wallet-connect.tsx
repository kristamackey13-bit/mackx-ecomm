"use client";

import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { base } from "wagmi/chains";

export function WalletConnect() {
  const account = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: switching } = useSwitchChain();

  if (account.isConnected) {
    const wrongNetwork = account.chainId !== base.id;
    return <div style={{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"}}>
      <span className="pill">{account.address?.slice(0,6)}…{account.address?.slice(-4)}</span>
      {wrongNetwork ? <button onClick={() => switchChain({chainId:base.id})} disabled={switching}>Switch to Base</button> : <span className="small">Connected to Base</span>}
      <button className="secondary" onClick={() => disconnect()}>Disconnect</button>
    </div>;
  }
  return <div>
    <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
      {connectors.map((connector) => <button key={connector.uid} onClick={() => connect({connector,chainId:base.id})} disabled={isPending}>{isPending ? "Connecting…" : `Connect ${connector.name}`}</button>)}
    </div>
    {error && <p className="small" role="alert">{error.message}</p>}
  </div>;
}
