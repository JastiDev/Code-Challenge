import styles from './DatabaseEntries.module.scss';
import React, { useEffect, useState } from 'react';

const data = [
  { firstname: "Anom", lastname: "Frediani", gender: "Male", email: "test@gmail.com", ipaddress: "192.168.1.25" },
  { firstname: "Megha", lastname: "Bea", gender: "Female", email: "test@gmail.com", ipaddress: "192.168.1.25" },
  { firstname: "Subham", lastname: "Valek", gender: "Male", email: "test@gmail.com", ipaddress: "192.168.1.25" },
]

const { API_URL } = process.env;

export const DatabaseEntries = () => {

  useEffect(() => {

    fetch(API_URL)
      .then(res => res.json())
      .then(
        (data) => {
            // setUsers(data);
            console.log(data);
        },
        (error) => {
            // setIsLoaded(true);
            console.log(error.message);
        }
      )
  }, []);

  return (
    <div className={styles.App}>
      <div className={styles.containerTitle}>Database Entries</div>
      <table className={styles.tableStyle}>
        <thead>
          <tr className={styles.labelContainer}>
            <th className={styles.tableLabel}>First Name</th>
            <th className={styles.tableLabel}>Last Name</th>
            <th className={styles.tableLabel}>Gender</th>
            <th className={styles.tableLabel}>Email</th>
            <th className={styles.tableLabel}>IP Address</th>
          </tr>

        </thead>

        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key} className={styles.tableItem}>
                <td>{val.firstname}</td>
                <td>{val.lastname}</td>
                <td>{val.gender}</td>
                <td>{val.email}</td>
                <td>{val.ipaddress}</td>
              </tr>
            )
          })}
        </tbody>
        
      </table>
    </div>
  );
}