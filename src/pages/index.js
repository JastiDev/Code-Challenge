import Head from 'next/head';
import styles from './Index.module.scss';
import { DatabaseEntries } from '../components/DatabaseEntries';
import React, { useEffect, useState } from 'react';

const { WS_URL } = process.env;

export const IndexPage = () => {
  const [ wsMessage, setWsMessage ] = useState("Plutonium");

  useEffect(() => {
    const ws = new WebSocket(WS_URL);   
    ws.onopen = (event) => {
      console.log(event);
    };

    ws.onmessage = (event) => {
      console.log(event);

      const json = JSON.parse(event.data);
      setWsMessage(json.event);

    };
    //clean up function
    return () => ws.close();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Padaster Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.mainTitle}>Rehash Code Challenge</div>
          <div className={styles.subTitle}>Sujanesh Jasti</div>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.serverContainer}>
            <div className={styles.containerTitle}>Server Status</div>
            <div className={styles.statusContainer}>{wsMessage}</div>
          </div>
          
          <DatabaseEntries />
        </div>        
      </div>
    </>
  )
}

export default IndexPage;