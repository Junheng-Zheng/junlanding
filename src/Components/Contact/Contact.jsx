import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c1aeafe-1026-4c91-a525-78defeadfb9b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return (
        <div className={styles.contact}>
            <form onSubmit={onSubmit}>
                <h2>Contact</h2>
            <div className={styles.inputsection}>
                <div className={styles.inputBox}>
                    <label>Full Name</label>
                    <input 
                        type="text" 
                        className={styles.field} 
                        placeholder=''
                        name ='name'
                        required 
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        className={styles.field} 
                        placeholder='' 
                        name = 'email'
                        required 
                    />
                </div>
                <div className={styles.inputBox}>
                    <label>Message</label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className={styles.fieldMessage} 
                        placeholder='' 
                        required
                    ></textarea>
                </div>
                <button type="submit">Send</button>
                </div>
            </form>
        </div>
    );
}
